import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import nodemailer from "nodemailer";
import { z } from "zod";

const { Pool } = pg;

const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  sliderValue: integer("slider_value").notNull(),
  message: text("message").notNull(),
  language: text("language").notNull().default("en"),
  createdAt: timestamp("created_at").defaultNow(),
});

const insertLeadSchema = createInsertSchema(leads).omit({ id: true, createdAt: true });
type InsertLead = z.infer<typeof insertLeadSchema>;
type Lead = typeof leads.$inferSelect;

const connectionString = process.env.DATABASE_URL;
const hasDatabase = Boolean(connectionString);
const pool = hasDatabase ? new Pool({ connectionString }) : null;
const db = pool ? drizzle(pool, { schema: { leads } }) : null;

let nextId = 1;
const memoryLeads: Lead[] = [];

function getServiceLabel(service: string, language: string) {
  const nl = language === "nl";

  switch (service) {
    case "home":
      return nl ? "Domotica / Home Assistant" : "Home automation / Home Assistant";
    case "it":
      return nl ? "IT Consultancy" : "IT Consulting";
    default:
      return service;
  }
}

function getScopeLabel(sliderValue: number, language: string) {
  const labels = language === "nl"
    ? ["Klein / Advies", "Medium / Standaard", "Groot / Complex", "Enterprise / Volledig"]
    : ["Small / Consultation", "Medium / Standard", "Large / Complex", "Enterprise / Full"];

  return labels[Math.max(0, Math.min(labels.length - 1, sliderValue - 1))];
}

function getMailerConfig() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.LEAD_NOTIFICATION_TO || "contact@roanr.be";
  const mailFrom = process.env.SMTP_FROM || smtpUser || mailTo;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
    return null;
  }

  return {
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPass,
    mailFrom,
    mailTo,
  };
}

async function sendLeadEmail(input: InsertLead) {
  const mailer = getMailerConfig();

  if (!mailer) {
    console.warn("SMTP configuration is incomplete; skipping lead email delivery.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: mailer.smtpHost,
    port: mailer.smtpPort,
    secure: mailer.smtpPort === 465,
    auth: {
      user: mailer.smtpUser,
      pass: mailer.smtpPass,
    },
  });

  const language = input.language ?? "en";
  const serviceLabel = getServiceLabel(input.service, language);
  const scopeLabel = getScopeLabel(input.sliderValue, language);
  const submittedAt = new Date().toLocaleString("nl-BE", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Europe/Brussels",
  });

  await transporter.sendMail({
    from: mailer.mailFrom,
    to: mailer.mailTo,
    replyTo: input.email,
    subject: `Nieuwe website lead: ${serviceLabel} - ${input.name}`,
    text: [
      `Nieuwe aanvraag via roanr.be`,
      ``,
      `Naam: ${input.name}`,
      `E-mail: ${input.email}`,
      `Telefoon: ${input.phone || "-"}`,
      `Dienst: ${serviceLabel}`,
      `Projectomvang: ${scopeLabel}`,
      `Taal: ${language}`,
      `Ingediend op: ${submittedAt}`,
      ``,
      `Bericht:`,
      input.message,
    ].join("\n"),
    html: `
      <h2>Nieuwe aanvraag via roanr.be</h2>
      <p><strong>Naam:</strong> ${input.name}</p>
      <p><strong>E-mail:</strong> ${input.email}</p>
      <p><strong>Telefoon:</strong> ${input.phone || "-"}</p>
      <p><strong>Dienst:</strong> ${serviceLabel}</p>
      <p><strong>Projectomvang:</strong> ${scopeLabel}</p>
      <p><strong>Taal:</strong> ${language}</p>
      <p><strong>Ingediend op:</strong> ${submittedAt}</p>
      <p><strong>Bericht:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${input.message}</pre>
    `,
  });

  return true;
}

async function createLead(insertLead: InsertLead): Promise<Lead> {
  if (hasDatabase && db) {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  const lead: Lead = {
    id: nextId++,
    ...insertLead,
    language: insertLead.language ?? "en",
    phone: insertLead.phone ?? null,
    createdAt: new Date(),
  };

  memoryLeads.push(lead);
  return lead;
}

export default async function handler(req: any, res: any) {
  const method = "POST";

  if (req.method === "OPTIONS") {
    res.setHeader("Allow", `${method}, OPTIONS`);
    return res.status(204).end();
  }

  if (req.method !== method) {
    res.setHeader("Allow", `${method}, OPTIONS`);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const input = insertLeadSchema.parse(req.body);
    await sendLeadEmail(input);
    const lead = await createLead(input);
    return res.status(201).json(lead);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0]?.message ?? "Validation failed",
        field: err.errors[0]?.path.join("."),
      });
    }

    console.error("Lead creation failed:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

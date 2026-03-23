import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
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

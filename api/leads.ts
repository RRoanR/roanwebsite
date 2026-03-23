import { z } from "zod";
import { api } from "../shared/routes";
import { db, hasDatabase } from "../server/db";
import { leads, type InsertLead, type Lead } from "../shared/schema";

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
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", `${api.leads.create.method}, OPTIONS`);
    return res.status(204).end();
  }

  if (req.method !== api.leads.create.method) {
    res.setHeader("Allow", `${api.leads.create.method}, OPTIONS`);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const input = api.leads.create.input.parse(req.body);
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

import { leads, type InsertLead, type Lead } from "@shared/schema";
import { db, hasDatabase } from "./db";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    if (!db) {
      throw new Error("Database storage unavailable");
    }
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }
}

export class MemoryStorage implements IStorage {
  private leads: Lead[] = [];
  private nextId = 1;

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const lead: Lead = {
      id: this.nextId++,
      ...insertLead,
      language: insertLead.language ?? "en",
      phone: insertLead.phone ?? null,
      createdAt: new Date(),
    };
    this.leads.push(lead);
    return lead;
  }
}

export const storage = hasDatabase ? new DatabaseStorage() : new MemoryStorage();

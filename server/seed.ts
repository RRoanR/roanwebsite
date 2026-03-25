import { db, hasDatabase } from "./db";
import { leads } from "@shared/schema";

async function seed() {
  if (!hasDatabase || !db) {
    console.error("DATABASE_URL is required to seed the database.");
    process.exit(1);
  }

  const existing = await db.select().from(leads);
  if (existing.length === 0) {
    await db.insert(leads).values([
      {
        name: "Jan Peeters",
        email: "jan.peeters@example.be",
        phone: "+32470123456",
        service: "garden",
        sliderValue: 1500,
        message: "We would like help with recurring garden maintenance around our home.",
        language: "nl"
      },
      {
        name: "Alice Smith",
        email: "alice@example.com",
        phone: "+32470987654",
        service: "it",
        sliderValue: 5000,
        message: "Looking for IT consulting for our small business.",
        language: "en"
      }
    ]);
    console.log("Seeded database");
  } else {
    console.log("Database already seeded");
  }
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { Pool } from "pg";

const globalForDb = globalThis as unknown as {
  pgPool?: Pool;
};

export const db =
  globalForDb.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pgPool = db;
}
.env.local
DATABASE_URL=postgresql://anshulgupta@localhost:5432/google_review_project




if (process.env.NODE_ENV !== "production") {
  globalForDb.pgPool = db;
}import { Pool } from "pg";

const globalForDb = globalThis as unknown as {
  pgPool?: Pool;
};

export const db =
  globalForDb.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pgPool = db;
}

export async function testDbConnection() {
  const result = await db.query("SELECT current_database() AS database");
  return result.rows[0];
}
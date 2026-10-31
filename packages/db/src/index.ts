import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { env } from "./env";

export const db = new Kysely({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: env.DATABASE_URL,
    }),
  }),
});

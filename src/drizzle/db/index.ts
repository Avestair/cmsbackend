import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

config({ path: '.env' }); //ADD YOUR OWN .ENV FILE

export const db = drizzle({ connection: {
  authToken: process.env.TURSO_AUTH_TOKEN!,
  url: process.env.TURSO_CONNECTION_URL!,
}});


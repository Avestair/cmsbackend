import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' }); // ADD YOUR OWN .ENV 

export default defineConfig({
    dbCredentials: {
        authToken: process.env.TURSO_AUTH_TOKEN!,
        url: process.env.TURSO_CONNECTION_URL!,
    },
    dialect: 'turso',
    verbose: true,
    out: './src/drizzle/migrations',
  schema: './src/drizzle/db/schema/schemas.ts',
});

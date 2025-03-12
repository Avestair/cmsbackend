import { db } from "../db";
import { InsertUser, usersTable } from "../db/schema/schemas";
import { apiKeysTable, InsertApiKey } from "../db/schema/apiKeySchema";
import { eq } from "drizzle-orm";

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}

export async function ValidateByEmailPassword(
  email: string
) {
  return await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .get();
}

export const createApiKey = async (apiKey: InsertApiKey) => {
  await db.insert(apiKeysTable).values(apiKey);
};

export const getApiKeyById = async (userId: string) => {
    return await db
    .select()
    .from(apiKeysTable)
    .where(eq(apiKeysTable.userId, userId))
    .get();
}

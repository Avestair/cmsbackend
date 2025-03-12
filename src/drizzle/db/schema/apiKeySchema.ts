import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { usersTable } from './userSchema'; 

export const apiKeysTable = sqliteTable('api_keys', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  keyHash: text('key_hash').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), 
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
});

export type InsertApiKey = typeof apiKeysTable.$inferInsert;
export type SelectApiKey = typeof apiKeysTable.$inferSelect;
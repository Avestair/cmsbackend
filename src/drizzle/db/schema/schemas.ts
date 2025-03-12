import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
  id: text('id').primaryKey(),
  description: text('description'),
  email: text('email').unique().notNull(),
  fullName: text('fullName').notNull(),
  userName: text('userName').unique().notNull(),
  password: text('password').notNull(),
  phoneNumber: text('phoneNumber').notNull(),
});


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;


export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  content: text('content').notNull(),
  category: text('category').notNull(),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  deletedAt: integer('deletedAt', { mode: 'timestamp' }),
  description: text('description'),
  status: text('status').notNull(),
  title: text('title').notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).$onUpdate(() => new Date()),
  userId: text('userId')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
});

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;



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
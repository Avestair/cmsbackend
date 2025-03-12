import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { usersTable } from './userSchema';

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
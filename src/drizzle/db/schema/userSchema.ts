import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
  id: text('id').primaryKey(),
  apiKey: text('apiKey').unique().notNull(),
  description: text('description'),
  email: text('email').unique().notNull(),
  fullName: text('fullName').notNull(),
  userName: text('userName').unique().notNull(),
  password: text('password').notNull(),
  phoneNumber: text('phoneNumber').notNull(),
});


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

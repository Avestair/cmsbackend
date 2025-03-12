import { eq } from 'drizzle-orm';
import { db } from '../db/index';
import { InsertPost, postsTable } from '../db/schema/schemas';

export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data);
}

 export async function getAllPosts() {
  return await db.select().from(postsTable).all();
 }

 export async function getPost(id: string) {
  return await db.select().from(postsTable).where(eq(postsTable.id , id)).get();
 }


 export async function getPostBySlug(slug: string) {
  return await db.select().from(postsTable).where(eq(postsTable.slug , slug)).get();
 }

 export async function getPostByUserId(userId: string) {
  return await db.select().from(postsTable).where(eq(postsTable.userId , userId)).all();
 }

 export async function updatePost(id: string, data: Partial<InsertPost>) {
  await db.update(postsTable).set(data).where(eq(postsTable.id, id));
  return await db.select().from(postsTable).where(eq(postsTable.id , id)).get();
 }

 export async function deletePost(id: string) {
  await db.select().from(postsTable).where(eq(postsTable.id , id)).get();
  await db.delete(postsTable).where(eq(postsTable.id, id));
 }
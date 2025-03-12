import { z } from "zod";

export const postSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(1, "Content is required"),
  description: z.string().min(1, "Description is required"),
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  slug: z.string().min(1, "Slug is required"),
  userId: z.string().min(1, "UserId Is Required"),
});
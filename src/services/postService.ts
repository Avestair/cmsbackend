import { createPost } from '../drizzle/queries/insert';
import { postSchema } from '../lib/schemas/postSchema';
import { randomUUIDv7 } from 'bun';

export const createPostService = async (body: any) => {
  const data = {
    id: randomUUIDv7(),
    description: body?.description,
    status: "published",
    title: body?.title,
    category: body?.category,
    content: body?.content,
    userId: body?.userId,
    slug: body?.slug ? body?.slug : body?.title.toLowerCase().replace(/\s/g, "-"),
  }
  postSchema.parse(data);
  await createPost(data);

  return {
    status: 200,
    message: "Post created successfully",
    newPostData: data,
  };
}
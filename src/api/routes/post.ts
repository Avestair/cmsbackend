import { Elysia, t } from "elysia";
import { createPost } from "../../drizzle/queries/post";
import { postSchema } from "../../lib/schemas/postSchema";
import { randomUUIDv7 } from "bun";
import {
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../../drizzle/queries/post";
import { PostDTO } from "../../Dtos/Post.dto";

export const postRoutes = new Elysia({ prefix: "/post" })
  .post(
    "/",
    async ({ body }) => {
      try {
        const data = {
          id: randomUUIDv7(),
          description: body?.description,
          status: "published",
          title: body?.title,
          category: body?.category,
          content: body?.content,
          userId: String(body?.userId),
          slug: body?.slug
            ? body?.slug
            : body?.title.toLowerCase().replace(/\s/g, "-"),
        };
        postSchema.parse(data);
        console.log("data", data);

        await createPost(data);

        return {
          status: 200,
          success: true,
          message: "Post created successfully",
          newPostData: data,
        };
      } catch (error) {
        console.error("Error creating post:", error);
        return {
          status: 500,
          success: false,
          message: "Failed to create post",
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },
    {
      body: PostDTO,
    }
  )
  .get("/", async () => {
    try {
      const posts = await getAllPosts();
      return {
        status: 200,
        message: "All posts retrieved successfully",
        success: true,
        Posts: posts,
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return {
        status: 500,
        success: false,
        message: "Failed to retrieve posts",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  })
  .post("/:id", async ({ params }) => {
    try {
      const post = await getPost(params.id);
      return {
        status: 200,
        success: true,
        message: "Post retrieved successfully",
        post: post,
      };
    } catch (error) {
      console.error("Error fetching post:", error);
      return {
        status: 500,
        success: false,
        message: "Failed to retrieve post",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  })
  .delete("/:id", async ({ params }) => {
    try {
      const post = await deletePost(params.id);
      return {
        status: 200,
        success: true,
        message: "Post deleted successfully",
        deletedPost: post,
      };
    } catch (error) {
      console.error("Error updating post:", error);
      return {
        status: 500,
        success: false,
        message: "Failed to update post",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  })
  .put(
    "/:id",
    async ({ params, body }) => {
      try {
        const post = await updatePost(params.id, body);
        return {
          status: 200,
          success: true,
          message: "Post updated successfully",
          UpdatedPostData: post,
        };
      } catch (error) {
        console.error("Error updating post:", error);
        return {
          status: 500,
          success: false,
          message: "Failed to update post",
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },
    {
      body: PostDTO,
    }
  );

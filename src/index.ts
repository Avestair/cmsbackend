import { Elysia } from "elysia";
import { postRoutes } from './api/routes/post';
import { userRoutes } from "./api/routes/user";

export const api = new Elysia()
  .use(postRoutes)
  .use(userRoutes)
  .listen(9010);

console.log(
  `🦊 Elysia is running at ${api.server?.hostname}:${api.server?.port}`
);

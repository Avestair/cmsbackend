import { Elysia } from "elysia";
import { postRoutes } from './routes/post';
import { userRoutes } from "./routes/user";

export const api = new Elysia()
  .use(postRoutes)
  .use(userRoutes)
  .listen(9010);

console.log(
  `🦊 Elysia is running at ${api.server?.hostname}:${api.server?.port}`
);
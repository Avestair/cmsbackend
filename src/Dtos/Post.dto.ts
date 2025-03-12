import { t } from "elysia";


export const PostDTO =  t.Object({
        category: t.String(),
        description: t.String(),
        content: t.String(),
        title: t.String(),
        userId: t.String(),
        slug: t.String(),
      })
import { t } from "elysia";

export const UserDTO = t.Object({
  email: t.String(),
  fullName: t.String(),
  phoneNumber: t.String(),
  description: t.Optional(t.String()),
  password: t.String(),
  userName: t.String(),
});

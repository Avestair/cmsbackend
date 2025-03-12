import { Elysia, t } from "elysia";
import { createUserService, ValidateUser } from "../../services/userService";
import { userSchema } from "../../lib/schemas/userSchema";
import { UserDTO } from "../../Dtos/UserDto";

export const userRoutes = new Elysia({ prefix: "/user" }).post(
  "/register",
  async ({ body }) => {
    try {
      console.log(body);
      userSchema.parse(body);

      const { userId, apiKey } = await createUserService(
        body.email,
        body.fullName,
        body.phoneNumber,
        body.description || "",
        body.password,
        body.userName
      );

      return {
        status: 200,
        message: "User registered successfully",
        userId,
        apiKey,
      };
    } catch (error) {
      console.error("Error registering user:", error);
      return {
        status: 500,
        message: "Failed to register user",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
  {
    body: UserDTO,
  }
).post(
  "/login",
  async ({ body }) => {
    try {
      userSchema.pick({ email: true, password: true }).parse(body);

      const apiKey = await ValidateUser(body.email, body.password);

      return {
        status: 200,
        message: "User logged in successfully",
        apiKey,
      };
    } catch (error) {
      console.error("Error logging in user:", error);
      return {
        status: 500,
        message: "Failed to log in user",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
  {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  }
)  

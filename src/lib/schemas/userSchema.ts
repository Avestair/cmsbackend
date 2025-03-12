import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  description: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  userName: z.string().min(1, "Username is required"),
});
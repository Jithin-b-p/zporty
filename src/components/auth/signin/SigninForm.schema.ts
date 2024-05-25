import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});

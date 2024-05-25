import { z } from "zod";

export const SignupSchema = z.object({
  firstname: z.string().min(1, { message: "Required" }),
  lastname: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});

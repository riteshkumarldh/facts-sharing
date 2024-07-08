import { z } from "zod";

export const registerformSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const factFormSchema = z.object({
  title: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
  description: z.string().min(50, {
    message: "Username must be at least 50 characters.",
  }),
});

import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const userListSchema = z.array(userSchema);

export type UserSchema = z.infer<typeof userSchema>;

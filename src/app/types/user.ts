import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  accountId: z.string(),
});

export const userListSchema = z.array(userSchema);

export type UserSchema = z.infer<typeof userSchema>;

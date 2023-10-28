import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  accountId: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;

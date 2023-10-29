import { z } from "zod";
import { userSchema, userListSchema } from "./user";

const summaryPostSchema = z.object({
  id: z.number(),
  summary: z.string(),
  likesCount: z.number(),
  isLiked: z.boolean(),
  picturedAt: z.string(),
});

export const summaryPostListSchema = z.array(summaryPostSchema);
export type SummaryPostSchema = z.infer<typeof summaryPostSchema>;
export type SummaryPostListSchema = z.infer<typeof summaryPostListSchema>;

const fullPostSchema = z.object({
  ...summaryPostSchema.shape,
  description: z.string(),
  imageUrl: z.string(),
  likes: userListSchema,
  createdBy: userSchema,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});
export type FullPostSchema = z.infer<typeof fullPostSchema>;

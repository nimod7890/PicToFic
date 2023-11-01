import { z } from "zod";
import { userSchema, userListSchema } from "./user";

const storyCardSchema = z.object({
  id: z.number(),
  summary: z.string(),
  likesCount: z.number(),
  isLiked: z.boolean(),
  picturedAt: z.string(),
});

export const storyCardListSchema = z.array(storyCardSchema);
export type StoryCardSchema = z.infer<typeof storyCardSchema>;
export type StoryCardListSchema = z.infer<typeof storyCardListSchema>;

const storySchema = z.object({
  ...storyCardSchema.shape,
  description: z.string(),
  imageUrl: z.string(),
  likes: userListSchema,
  createdBy: userSchema,
  createdAt: z.string(),
  updatedAt: z.string().optional().nullable(),
});
export const storyListSchema = z.array(storySchema);
export type StorySchema = z.infer<typeof storySchema>;
export type StoryListSchema = z.infer<typeof storyListSchema>;

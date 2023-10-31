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

const StorySchema = z.object({
  ...storyCardSchema.shape,
  description: z.string(),
  imageUrl: z.string(),
  likes: userListSchema,
  createdBy: userSchema,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});
export type StorySchema = z.infer<typeof StorySchema>;

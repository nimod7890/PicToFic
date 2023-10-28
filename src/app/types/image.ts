import { z } from "zod";
import { userSchema, userListSchema } from "./user";

const summaryImageSchema = z.object({
  id: z.number(),
  description: z.string(),
  likesCount: z.number(),
  isLiked: z.boolean(),
});

const summaryImageListSchema = z.array(summaryImageSchema);
export type SummaryImageSchema = z.infer<typeof summaryImageSchema>;
export type ImageListSchema = z.infer<typeof summaryImageListSchema>;

const fullImageSchema = z.object({
  ...summaryImageSchema.shape,
  imageUrl: z.string(),
  likes: userListSchema,
  createdBy: userSchema,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});
export type FullImageSchema = z.infer<typeof fullImageSchema>;

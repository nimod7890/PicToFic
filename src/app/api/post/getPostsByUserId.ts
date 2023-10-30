import { SummaryPostListSchema } from "../../types/post";
import { mockPosts, mockPosts3 } from "../../mocks/post";

// export async function getPostsByUserId(): Promise<> {
export function getPostsByUserId({ userId }: { userId: string }): SummaryPostListSchema {
  const posts = userId === "nim_od" ? [...mockPosts3, ...mockPosts] : mockPosts;
  return posts;
}

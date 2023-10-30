import { SummaryPostListSchema } from "../../types/post";
import { mockPosts, mockPosts2 } from "./getPostsByUserId";

export function getPosts(): SummaryPostListSchema {
  const posts = [...mockPosts, ...mockPosts2];
  return posts;
}

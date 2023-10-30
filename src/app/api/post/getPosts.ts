import { mockAllPost } from "../../mocks/post";
import { SummaryPostListSchema } from "../../types/post";

export function getPosts(): SummaryPostListSchema {
  return mockAllPost;
}

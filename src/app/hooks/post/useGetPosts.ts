import { getPosts } from "../../api/post/getPosts";

export default function useGetPosts() {
  const posts = getPosts();

  return posts;
}

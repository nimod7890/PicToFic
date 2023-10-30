import useGetPosts from "../../../hooks/post/useGetPosts";

export default function useHomePage() {
  const posts = useGetPosts();

  return { posts };
}

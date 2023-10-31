import { getPostsByUserId } from "../../api/post/getPostsByUserId";

type useGetPostsByUserIdType = { userId: string };

export default function useGetPostsByUserId({ userId }: useGetPostsByUserIdType) {
  const posts = getPostsByUserId({ userId });

  return { posts };
}

import { useLocation } from "react-router-dom";
import useGetUserByUserId from "../../../hooks/user/useGetUserByUserId";
import useGetPostsByUserId from "../../../hooks/post/useGetPostsByUserId";

export default function useUserPage() {
  const { pathname } = useLocation();
  const userId = pathname.slice(1);

  const { user } = useGetUserByUserId({ id: userId });
  const { posts } = useGetPostsByUserId({ userId });

  return { user, posts, isError: Boolean(user) };
}

import { useLocation } from "react-router-dom";
import useGetUser from "../../../hooks/user/useGetUser";
import useGetPostsByUserId from "../../../hooks/post/useGetPostsByUserId";

export default function useUserPage() {
  const { pathname } = useLocation();
  const userId = pathname.slice(1);

  const { user } = useGetUser({ id: userId });
  const { posts } = useGetPostsByUserId({ userId });

  return { user, posts };
}

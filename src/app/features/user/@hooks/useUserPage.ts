import { useLocation } from "react-router-dom";
import useGetUserByUserId from "../../../hooks/user/useGetUserByUserId";
import useGetStoryListByUserId from "../../../hooks/story/useGetStoryListByUserId";

export default function useUserPage() {
  const { pathname } = useLocation();
  const userId = pathname.slice(1);

  const { user } = useGetUserByUserId({ id: userId });
  const { storyList } = useGetStoryListByUserId({ userId });

  return { user, storyList, isError: !user };
}

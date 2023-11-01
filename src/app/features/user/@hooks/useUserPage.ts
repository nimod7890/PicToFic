import { useParams } from "react-router-dom";
import useGetUserByUserId from "../../../hooks/user/useGetUserByUserId";
import useGetStoryListByUserId from "../../../hooks/story/useGetStoryListByUserId";

export default function useUserPage() {
  const { userId } = useParams();

  if (!userId) {
    return null;
  }

  const { user } = useGetUserByUserId({ id: userId });
  const { storyList } = useGetStoryListByUserId({ userId });

  return { user, storyList, isError: !user };
}

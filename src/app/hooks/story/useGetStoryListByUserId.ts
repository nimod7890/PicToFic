import { getStoryListByUserId } from "../../api/story/getStoryListByUserId";

export default function useGetStoryListByUserId({ userId }: { userId: string }) {
  const storyList = getStoryListByUserId({ userId });

  return { storyList };
}

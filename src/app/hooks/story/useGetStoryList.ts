import { getStoryList } from "../../api/story/getStoryList";

export default function useGetStoryList() {
  const storyList = getStoryList();

  return storyList;
}

import useGetStoryList from "../../../hooks/story/useGetStoryList";

export default function useUserStoryCardListPage() {
  const storyList = useGetStoryList();

  return { storyList };
}

import useGetStoryList from "../../../hooks/story/useGetStoryList";

export default function useHomePage() {
  const storyList = useGetStoryList();

  return { storyList };
}

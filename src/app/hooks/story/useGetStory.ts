import getStory from "../../api/story/getStory";

export default function useGetStory({ storyId }: { storyId: number }) {
  const story = getStory({ storyId });

  return { story };
}

import { Stack } from "@mui/material";
import useGetStory from "../../hooks/story/useGetStory.ts";
import StoryBook from "./book/StoryBook.tsx";

type StoryContentProps = {
  storyId: number;
};

export default function Story({ storyId }: StoryContentProps) {
  const { story } = useGetStory({ storyId });

  return (
    <Stack rowGap={3}>
      <StoryBook story={story} />
    </Stack>
  );
}

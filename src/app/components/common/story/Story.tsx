import { Box } from "@mui/material";
import useGetStory from "../../../hooks/story/useGetStory";
import StoryCard from "./card/StoryCard";

type StoryContentProps = { storyId: number };

export default function Story({ storyId }: StoryContentProps) {
  const { story } = useGetStory({ storyId });

  return (
    <>
      <Box width="400px">
        <StoryCard story={story} />
      </Box>
    </>
  );
}

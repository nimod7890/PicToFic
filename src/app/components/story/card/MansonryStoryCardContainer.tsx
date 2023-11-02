import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { StoryCardListSchema } from "../../../types/story";
import StoryCard from "./StoryCard";
import { Masonry } from "@mui/lab";

type MansonryStoryCardContainerProps = {
  storyList: StoryCardListSchema;
};

export default function MansonryStoryCardContainer({ storyList }: MansonryStoryCardContainerProps) {
  const isXs = useMediaQuery("(max-width:500px)");
  const isSm = useMediaQuery("(max-width:700px)");

  const columns = useMemo(() => {
    switch (true) {
      case isXs:
        return 1;
      case isSm:
        return 2;
      default:
        return 3;
    }
  }, [isSm, isXs]);

  return (
    <Masonry columns={columns} spacing={3}>
      {storyList.map((story, index) => (
        <StoryCard story={story} key={index} />
      ))}
    </Masonry>
  );
}

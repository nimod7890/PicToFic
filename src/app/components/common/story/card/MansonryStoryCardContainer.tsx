import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { StoryCardListSchema } from "../../../../types/story";
import StoryCard from "./StoryCard";
import { Masonry } from "@mui/lab";
import ViewStoryButton from "../../../../features/story/ui/ViewStoryButton";

type MansonryStoryCardContainerProps = {
  storyList: StoryCardListSchema;
};

export default function MansonryStoryCardContainer({ storyList }: MansonryStoryCardContainerProps) {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const columns = useMemo(() => {
    switch (true) {
      case isMd:
        return 3;
      case isSm:
        return 2;
      case isXs:
        return 1;
    }
  }, [theme.breakpoints]);

  return (
    <Masonry columns={columns} spacing={3}>
      {storyList.map((story, index) => (
        <ViewStoryButton storyId={story.id} key={index}>
          <StoryCard story={story} />
        </ViewStoryButton>
      ))}
    </Masonry>
  );
}

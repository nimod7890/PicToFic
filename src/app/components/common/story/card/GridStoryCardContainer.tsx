import { StoryCardListSchema } from "../../../../types/story";
import { Grid } from "@mui/material";
import StoryCard from "./StoryCard";
import ViewStoryButton from "../../../../features/story/ui/ViewStoryButton";

type GridStoryCardContainerProps = {
  storyList: StoryCardListSchema;
};

export default function GridStoryCardContainer({ storyList }: GridStoryCardContainerProps) {
  return (
    <Grid container spacing={2} columns={6} sx={{ left: "-1rem", position: "relative" }}>
      {storyList.map((story, index) => (
        <Grid key={index} item xs={3} lg={2}>
          <ViewStoryButton storyId={story.id}>
            <StoryCard story={story} type={"grid"} />
          </ViewStoryButton>
        </Grid>
      ))}
    </Grid>
  );
}

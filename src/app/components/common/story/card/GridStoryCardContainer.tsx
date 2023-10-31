import { StoryCardListSchema } from "../../../../types/story";
import { Grid } from "@mui/material";
import StoryCard from "./StoryCard";

type GridStoryCardContainerProps = {
  storyList: StoryCardListSchema;
};

export default function GridStoryCardContainer({ storyList }: GridStoryCardContainerProps) {
  return (
    <Grid container spacing={2} columns={6} sx={{ left: "-1rem", position: "relative" }}>
      {storyList.map((story, index) => (
        <Grid key={index} item xs={3} lg={2}>
          <StoryCard story={story} type={"grid"} />
        </Grid>
      ))}
    </Grid>
  );
}

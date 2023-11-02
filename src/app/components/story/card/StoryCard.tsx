import { Box, Card } from "@mui/material";
import { StoryCardSchema } from "../../../types/story";
import StoryMetaData from "../metaData/StoryMetaData";
import ViewStoryButton from "../../../features/story/ui/ViewStoryButton";

type StoryCardProps = {
  story: StoryCardSchema;
  type?: "grid" | "mansonry";
};

export default function StoryCard({ story, type = "mansonry" }: StoryCardProps) {
  return (
    <Card sx={{ padding: "1rem", paddingTop: "2rem" }} elevation={3}>
      <ViewStoryButton storyId={story.id}>
        {type === "grid" ? (
          <Box
            sx={{
              ...textContainerStyles(story.summary.length),
              height: 300,
            }}
          >
            {story.summary}
          </Box>
        ) : (
          <Box sx={textContainerStyles(story.summary.length)}>{story.summary}</Box>
        )}
      </ViewStoryButton>
      <StoryMetaData story={story} />
    </Card>
  );
}

const textContainerStyles = (length: number) => ({
  fontSize: getFontSizeFromTextLength(length),
  fontWeight: getFontWeightFromTextLength(length),
  boxShadow: "inset 0 2px 8px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: "5px",
  padding: "8px 16px",
  fontStyle: "italic",
  marginBottom: "20px",
  overflow: "scroll",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
});

const textMaxLength = 500;

function getFontSizeFromTextLength(textLength: number) {
  return 40 - (textLength / textMaxLength) * 26;
}

function getFontWeightFromTextLength(textLength: number) {
  return 800 - (textLength / textMaxLength) * 400;
}

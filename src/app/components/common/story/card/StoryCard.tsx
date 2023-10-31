import { Box, Card } from "@mui/material";
import { StoryCardSchema } from "../../../../types/story";
import StoryMetaData from "../StoryMetaData";

type StoryCardProps = {
  story: StoryCardSchema;
  type?: "grid" | "mansonry";
};

export default function StoryCard({ story, type = "mansonry" }: StoryCardProps) {
  return (
    <Card sx={{ padding: "1rem", paddingTop: "2rem" }} elevation={3}>
      {type === "grid" ? (
        <Box
          sx={{
            ...textContainerStyles,
            height: contentHeight,
          }}
        >
          {story.summary}
        </Box>
      ) : (
        <Box
          sx={{
            ...textContainerStyles,
            fontSize: getFontSizeFromTextLength(story.summary.length),
            fontWeight: getFontWeightFromTextLength(story.summary.length),
            maxHeight: contentHeight,
          }}
        >
          {story.summary}
        </Box>
      )}
      <StoryMetaData story={story} />
    </Card>
  );
}

const contentHeight = 240;

const textContainerStyles = {
  boxShadow: "inset 0 2px 8px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: "5px",
  maxHeight: contentHeight,
  padding: "8px 16px",
  fontStyle: "italic",
  marginBottom: "20px",
  overflow: "scroll",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
};

const textMaxLength = 500;

function getFontSizeFromTextLength(textLength: number) {
  return 40 - (textLength / textMaxLength) * 26;
}

function getFontWeightFromTextLength(textLength: number) {
  return 800 - (textLength / textMaxLength) * 400;
}

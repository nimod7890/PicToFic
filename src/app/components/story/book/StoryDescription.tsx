import { StorySchema } from "../../../types/story";
import { Box } from "@mui/material";

type StoryDescriptionProps = { story: StorySchema };

export default function StoryDescription({ story }: StoryDescriptionProps) {
  return (
    <Box
      sx={{
        textOverflow: "ellipsis",
        wordBreak: "break-all",
      }}
    >
      {story.description} {story.description}
    </Box>
  );
}

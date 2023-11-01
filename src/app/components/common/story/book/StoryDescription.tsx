import { StorySchema } from "../../../../types/story";
import { Box } from "@mui/material";

type StoryDescriptionProps = { story: StorySchema };

export default function StoryDescription({ story }: StoryDescriptionProps) {
  return (
    <Box
      paddingX={2}
      marginX={-2}
      marginY={2}
      sx={{
        textOverflow: "ellipsis",
        wordBreak: "break-all",
        overflow: "scroll",
        height: "100%",
      }}
    >
      {story.description} {story.description}
    </Box>
  );
}

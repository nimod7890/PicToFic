import { Box } from "@mui/material";

type StoryDescriptionProps = { description: string };

export default function StoryDescription({ description }: StoryDescriptionProps) {
  return (
    <Box
      sx={{
        textOverflow: "ellipsis",
        wordBreak: "break-all",
        paddingX: 2,
        paddingY: 1,
      }}
    >
      {description}
    </Box>
  );
}

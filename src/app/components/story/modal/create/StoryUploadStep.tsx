import { Box, Stack } from "@mui/material";
import { UseStoryUploadType } from "../../@hooks/useStoryUpload";
import StoryDescription from "../../StoryDescription";
import StoryImage from "../../StoryImage";

export default function StoryUploadStep({ image, description }: UseStoryUploadType) {
  return (
    <Stack direction="row" sx={{ maxWidth: "600px", height: "100%" }}>
      <StoryImage imageUrl={image?.imageUrl as string} configs={{ width: "50%" }} />
      <Box sx={{ width: "50%", overflow: "auto" }}>
        <StoryDescription description={description as string} />
      </Box>
    </Stack>
  );
}

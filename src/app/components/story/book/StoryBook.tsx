import { Box, Card, Divider, Stack, useMediaQuery } from "@mui/material";
import { StorySchema } from "../../../types/story";
import BasicUserInfo from "../../user/BasicUserInfo";
import StoryMetaData from "../metaData/StoryMetaData";
import StoryDescription from "../StoryDescription";
import StoryImage from "../StoryImage";

export default function StoryBook({ story }: { story: StorySchema }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const width = isSmallScreen ? "100%" : "50%";

  return (
    <Card sx={{ height: "100%" }}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        sx={{ maxHeight: isSmallScreen ? "100%" : "572px" }}
      >
        <Stack
          divider={<Divider />}
          sx={{
            width,
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <BasicUserInfo user={story.createdBy} />
          <Box
            sx={{
              height: "100%",
              minHeight: "200px",
              maxHeight: `${isSmallScreen && "200px"}`,
              overflow: "auto",
            }}
          >
            <StoryDescription description={story.description} />
          </Box>
          <Box sx={{ padding: 1 }}>
            <StoryMetaData story={story} />
          </Box>
        </Stack>
        <StoryImage imageUrl={story.imageUrl} configs={{ width }} />
      </Stack>
    </Card>
  );
}

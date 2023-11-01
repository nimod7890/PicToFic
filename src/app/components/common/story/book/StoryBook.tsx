import { Box, Card, CardMedia, Divider, Stack, useMediaQuery } from "@mui/material";
import { StorySchema } from "../../../../types/story";
import BasicUserInfo from "../../user/BasicUserInfo";
import StoryMetaData from "../metaData/StoryMetaData";
import StoryDescription from "./StoryDescription";
import { neutral } from "../../../../styles/colors";

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
              paddingX: 2,
              paddingY: 1,
            }}
          >
            <StoryDescription story={story} />
          </Box>
          <Box sx={{ padding: 1 }}>
            <StoryMetaData story={story} />
          </Box>
        </Stack>
        <CardMedia
          alt="image"
          component="img"
          sx={{
            width,
            backgroundColor: neutral[0],
            objectFit: "contain",
          }}
          image={story.imageUrl}
        />
      </Stack>
    </Card>
  );
}

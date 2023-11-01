import { Card, CardContent, CardMedia, Stack, useMediaQuery } from "@mui/material";
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
        <CardContent
          sx={{
            width,
            maxHeight: `${isSmallScreen && "300px"}`,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <BasicUserInfo user={story.createdBy} />
          <StoryDescription story={story} />
          <StoryMetaData story={story} />
        </CardContent>
        <CardMedia
          component="img"
          alt="StoryBook Image"
          sx={{
            width,
            backgroundColor: neutral[0],
            objectFit: "contain",
            display: "block",
          }}
          image={story.imageUrl}
        />
      </Stack>
    </Card>
  );
}

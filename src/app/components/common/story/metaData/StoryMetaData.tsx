import { Stack, Tooltip, Typography, Zoom } from "@mui/material";
import { neutral } from "../../../../styles/colors";
import { StoryCardSchema } from "../../../../types/story";
import LikeButton from "./LikeButton";

type StoryMetaDataProps = { story: StoryCardSchema };

export default function StoryMetaData({ story }: StoryMetaDataProps) {
  return (
    <Stack
      direction="row"
      spacing="1rem"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "2px",
      }}
    >
      <LikeButton story={story} />
      <Tooltip title="Captured at" enterDelay={1000} TransitionComponent={Zoom}>
        <Typography variant="caption" color={neutral[70]}>
          {story.picturedAt}
        </Typography>
      </Tooltip>
    </Stack>
  );
}

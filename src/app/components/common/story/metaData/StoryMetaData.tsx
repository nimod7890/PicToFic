import { Stack } from "@mui/material";
import { StoryCardSchema } from "../../../../types/story";
import LikeButton from "./LikeButton";
import PicturedDate from "./PicturedDate";

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
      <PicturedDate date={story.picturedAt} />
    </Stack>
  );
}

import { Stack, Typography } from "@mui/material";
import { neutral } from "../../../../styles/colors";
import { SummaryPostSchema } from "../../../../types/post";
import LikeButton from "../LikeButton";

type PostMetaDataProps = { post: SummaryPostSchema };

export default function PostMetaData({ post }: PostMetaDataProps) {
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
      <LikeButton post={post} />
      <Typography variant="caption" color={neutral[70]}>
        {post.picturedAt}
      </Typography>
    </Stack>
  );
}

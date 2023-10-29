import { Box, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { SummaryPostSchema } from "../../../types/post";
import LikeButton from "./LikeButton";
import { neutral, secondary } from "../../../styles/colors";

type PostCardProps = {
  post: SummaryPostSchema;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card sx={{ padding: "1rem 0 12px 0" }}>
      <CardContent sx={{ padding: 0 }}>
        <Box
          sx={{
            paddingX: "1rem",
            height: "240px",
            overflow: "scroll",
            textOverflow: "ellipsis",
            wordBreak: "break-all",
          }}
        >
          {post.summary}
        </Box>
      </CardContent>
      <CardActions
        sx={{ padding: "8px 1rem 0 1rem", justifyContent: "space-between", gap: "1rem" }}
      >
        <Stack direction="row" spacing={"5px"} alignItems={"center"}>
          <LikeButton isLiked={post.isLiked} postId={post.id} />
          <Typography variant="caption" color={secondary[50]}>
            {post.likesCount}
          </Typography>
        </Stack>
        <Typography variant="caption" color={neutral[70]}>
          {post.picturedAt}
        </Typography>
      </CardActions>
    </Card>
  );
}

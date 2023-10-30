import { Box, Card } from "@mui/material";
import { SummaryPostSchema } from "../../../../types/post";
import PostMetaData from "./PostMetaData";

type PostCardProps = {
  post: SummaryPostSchema;
  type?: "grid" | "mansonry";
};

export default function PostCard({ post, type = "mansonry" }: PostCardProps) {
  return (
    <Card sx={{ padding: "1rem", paddingTop: "2rem" }} elevation={3}>
      {type === "grid" ? (
        <Box
          sx={{
            ...textContainerStyles,
            height: contentHeight,
          }}
        >
          {post.summary}
        </Box>
      ) : (
        <Box
          sx={{
            ...textContainerStyles,
            fontSize: getFontSizeFromTextLength(post.summary.length),
            fontWeight: getFontWeightFromTextLength(post.summary.length),
            maxHeight: contentHeight,
          }}
        >
          {post.summary}
        </Box>
      )}
      <PostMetaData post={post} />
    </Card>
  );
}

const contentHeight = 240;

const textContainerStyles = {
  boxShadow: "inset 0 2px 8px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: "5px",
  maxHeight: contentHeight,
  padding: "8px 16px",
  fontStyle: "italic",
  marginBottom: "20px",
  overflow: "scroll",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
};

const textMaxLength = 500;

function getFontSizeFromTextLength(textLength: number) {
  return 40 - (textLength / textMaxLength) * 26;
}

function getFontWeightFromTextLength(textLength: number) {
  return 800 - (textLength / textMaxLength) * 400;
}

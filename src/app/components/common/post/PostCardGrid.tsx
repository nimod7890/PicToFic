import { SummaryPostListSchema } from "../../../types/post";
import { Grid } from "@mui/material";
import PostCard from "./PostCard";

type PostCardGridProps = {
  posts: SummaryPostListSchema;
  configs?: {
    maxWidth?: 2 | 3;
  };
};

export default function PostCardGrid({ posts, configs = {} }: PostCardGridProps) {
  // const { maxWidth = 2 } = configs;
  configs;

  return (
    <Grid container spacing={1} columns={6} sx={{ left: "-10px", position: "relative" }}>
      {posts.map((post, index) => (
        <Grid key={index} item xs={6} md={3} lg={2}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

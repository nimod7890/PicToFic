import { SummaryPostListSchema } from "../../../types/post";
import { Grid } from "@mui/material";
import PostCard from "./PostCard";

type PostCardGridProps = {
  posts: SummaryPostListSchema;
};

export default function PostCardGrid({ posts }: PostCardGridProps) {
  return (
    <Grid container spacing={1} columns={12} sx={{ left: "-10px", position: "relative" }}>
      {posts.map((post, index) => (
        <Grid key={index} item xs={6} md={4}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

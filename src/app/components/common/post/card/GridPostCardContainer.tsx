import { SummaryPostListSchema } from "../../../../types/post";
import { Grid } from "@mui/material";
import PostCard from "./PostCard";

type GridPostCardContainerProps = {
  posts: SummaryPostListSchema;
};

export default function GridPostCardContainer({ posts }: GridPostCardContainerProps) {
  return (
    <Grid container spacing={2} columns={6} sx={{ left: "-1rem", position: "relative" }}>
      {posts.map((post, index) => (
        <Grid key={index} item xs={3} lg={2}>
          <PostCard post={post} type={"grid"} />
        </Grid>
      ))}
    </Grid>
  );
}

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { SummaryPostListSchema } from "../../../../types/post";
import PostCard from "./PostCard";
import { Masonry } from "@mui/lab";

type MansonryPostCardContainerProps = {
  posts: SummaryPostListSchema;
};

export default function MansonryPostCardContainer({ posts }: MansonryPostCardContainerProps) {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const columns = useMemo(() => {
    switch (true) {
      case isMd:
        return 3;
      case isSm:
        return 2;
      case isXs:
        return 1;
    }
  }, [theme.breakpoints]);

  return (
    <Masonry columns={columns} spacing={3}>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </Masonry>
  );
}

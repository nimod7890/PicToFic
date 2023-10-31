import { Button } from "@mui/material";
import {
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { SummaryPostSchema } from "../../../types/post";

type LikeButtonProps = {
  post: SummaryPostSchema;
};

export default function LikeButton({ post }: LikeButtonProps) {
  const [liked, updateLiked] = useState<boolean>(post.isLiked);

  return (
    <Button
      color="secondary"
      onClick={() => updateLiked(liked => !liked)}
      startIcon={liked ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon />}
      sx={{ padding: "1px 6px", minWidth: "max-content" }}
    >
      {post.likesCount}
    </Button>
  );
}

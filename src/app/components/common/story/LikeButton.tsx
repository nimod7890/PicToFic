import { Button } from "@mui/material";
import {
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { StoryCardSchema } from "../../../types/story";

type LikeButtonProps = {
  post: StoryCardSchema;
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

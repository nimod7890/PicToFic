import { Button } from "@mui/material";
import {
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { StoryCardSchema } from "../../../../types/story";

type LikeButtonProps = {
  story: StoryCardSchema;
};

export default function LikeButton({ story }: LikeButtonProps) {
  const [liked, updateLiked] = useState<boolean>(story.isLiked);

  return (
    <Button
      color="secondary"
      onClick={() => updateLiked(liked => !liked)}
      startIcon={liked ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon />}
      sx={{ padding: "1px 6px", minWidth: "max-content" }}
    >
      {story.likesCount}
    </Button>
  );
}

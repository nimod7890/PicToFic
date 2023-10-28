import { IconButton } from "@mui/material";
import {
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
} from "@mui/icons-material";
import { useState } from "react";

type LikeButtonProps = { isLiked?: boolean; imageId: number };

export default function LikeButton({ isLiked = false, imageId }: LikeButtonProps) {
  const [liked, updateLiked] = useState<boolean>(isLiked);
  imageId;

  return (
    <IconButton size={"small"} onClick={() => updateLiked(like => !like)} color="secondary">
      {liked ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon />}
    </IconButton>
  );
}

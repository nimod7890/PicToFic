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
    <IconButton
      onClick={() => updateLiked(like => !like)}
      color="secondary"
      sx={{ width: "20px", height: "20px" }}
    >
      {liked ? (
        <FavoriteBorderRoundedIcon sx={{ width: "inherit" }} />
      ) : (
        <FavoriteRoundedIcon sx={{ width: "inherit" }} />
      )}
    </IconButton>
  );
}

import { IconButton, Stack, Typography } from "@mui/material";
import {
  FavoriteRounded as FavoriteRoundedIcon,
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { StoryCardSchema } from "../../../../types/story";
import { neutral, secondary } from "../../../../styles/colors";

type LikeButtonProps = {
  story: StoryCardSchema;
};

export default function LikeButton({ story }: LikeButtonProps) {
  const [liked, updateLiked] = useState<boolean>(story.isLiked);

  return (
    <Stack direction="row" alignItems={"center"} spacing="4px">
      <IconButton
        color={"secondary"}
        onClick={() => updateLiked(liked => !liked)}
        sx={{ padding: "4px", width: "30px", height: "25px", bordery: "1px" }}
      >
        {liked ? (
          <FavoriteRoundedIcon sx={{ color: secondary[60] }} />
        ) : (
          <FavoriteBorderRoundedIcon />
        )}
      </IconButton>
      <Typography variant="caption" color={neutral[70]}>
        {story.likesCount}
      </Typography>
    </Stack>
  );
}

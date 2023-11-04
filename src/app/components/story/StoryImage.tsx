import { CardMedia } from "@mui/material";
import { neutral } from "../../styles/colors";

type StoryImageProps = {
  imageUrl: string;
  configs?: { width?: string };
};

export default function StoryImage({ configs = {}, imageUrl }: StoryImageProps) {
  const { width = "100%" } = configs;
  return (
    <CardMedia
      alt="image"
      component="img"
      sx={{
        width,
        backgroundColor: neutral[0],
        objectFit: "contain",
      }}
      image={imageUrl}
    />
  );
}

import { ImageListSchema } from "../../../types/image";
import { Grid } from "@mui/material";
import ImageDescriptionCard from "./ImageCard";

type ImageCardGridProps = {
  images: ImageListSchema;
};

export default function ImageCardGrid({ images }: ImageCardGridProps) {
  return (
    <Grid container spacing={1} columns={12} sx={{ left: "-10px", position: "relative" }}>
      {images.map((image, index) => (
        <Grid key={index} item xs={6} md={4}>
          <ImageDescriptionCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
}

import { ImageListSchema } from "../../../types/image";
import { Grid } from "@mui/material";
import ImageDescriptionCard from "./ImageCard";

type ImageCardGridProps = {
  images: ImageListSchema;
};

export default function ImageCardGrid({ images }: ImageCardGridProps) {
  return (
    <Grid container spacing={1} columns={12}>
      {images.map((image, index) => (
        <Grid key={index} item md={3} xs={12}>
          <ImageDescriptionCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
}

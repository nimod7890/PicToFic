import { ImageListSchema } from "../../../types/image";
import { Grid, Stack } from "@mui/material";
import ImageDescriptionCard from "./ImageCard";

type ImageCardGridProps = {
  images: ImageListSchema;
};

export default function ImageCardGrid({ images }: ImageCardGridProps) {
  return (
    <Stack alignItems={"center"}>
      <Grid container spacing={1} columns={12} sx={{ maxWidth: "1000px" }}>
        {images.map((image, index) => (
          <Grid key={index} item xs={6} md={4}>
            <ImageDescriptionCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

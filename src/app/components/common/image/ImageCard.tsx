import { Card, CardContent, Stack, Typography } from "@mui/material";
import { SummaryImageSchema } from "../../../types/image";
import LikeButton from "./LikeButton";
import { secondary } from "../../../styles/colors";

type ImageCardProps = {
  image: SummaryImageSchema;
};

export default function ImageDescriptionCard({ image }: ImageCardProps) {
  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>{image.description}</Typography>
        <Stack direction="row" alignItems={"center"} alignSelf={"end"} spacing={"1px"}>
          <LikeButton isLiked={image.isLiked} imageId={image.id} />
          <Typography variant="body2" color={secondary[50]}>
            {image.likesCount}
          </Typography>
        </Stack>
        {/* <Typography variant='caption'>Word of the Day</Typography> */}
      </CardContent>
    </Card>
  );
}

import { Box, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { SummaryImageSchema } from "../../../types/image";
import LikeButton from "./LikeButton";
import { neutral, secondary } from "../../../styles/colors";

type ImageCardProps = {
  image: SummaryImageSchema;
};

export default function ImageDescriptionCard({ image }: ImageCardProps) {
  return (
    <Card sx={{ padding: "1rem 0 12px 0" }}>
      <CardContent sx={{ padding: 0 }}>
        <Box
          sx={{
            paddingX: "1rem",
            height: "240px",
            overflow: "scroll",
            textOverflow: "ellipsis",
            wordBreak: "break-all",
          }}
        >
          {image.summary}
        </Box>
      </CardContent>
      <CardActions sx={{ padding: "8px 1rem 0 1rem", justifyContent: "space-between" }}>
        <Stack direction="row" spacing={"5px"} alignItems={"center"}>
          <LikeButton isLiked={image.isLiked} imageId={image.id} />
          <Typography variant="caption" color={secondary[50]}>
            {image.likesCount}
          </Typography>
        </Stack>
        <Typography variant="caption" color={neutral[70]}>
          {image.picturedAt}
        </Typography>
      </CardActions>
    </Card>
  );
}

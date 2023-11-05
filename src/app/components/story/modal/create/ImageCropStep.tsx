import { useEffect, useState } from "react";
import { UseImageCropType, createCroppedImage } from "../../@hooks/useImageCrop";
import { Box, Stack } from "@mui/material";
import { ImageFileType } from "../../@hooks/useStoryCreateModal";
import StoryImage from "../../StoryImage";

export default function ImageCropStep({
  image,
  croppedImage,
  onChangeCroppedImage,
}: UseImageCropType) {
  if (!image || !croppedImage) {
    return null;
  }

  return (
    <Stack direction={"row"}>
      <ImageCropBox imageUrl={image.imageUrl} onChangeImage={onChangeCroppedImage} />;
      {/* Todo: croppedImage 반영 속도 느림  */}
      <StoryImage imageUrl={croppedImage.imageUrl} configs={{ width: "300px" }} />
    </Stack>
  );
}

const ImageCropBox = ({
  imageUrl,
  onChangeImage,
}: {
  imageUrl: string;
  onChangeImage: (image: ImageFileType) => void;
}) => {
  const boxSize = 300;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cropSize, setCropSize] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const scale = Math.max(boxSize / image.width, boxSize / image.height);
      const cropSize = Math.min(image.width, image.height);
      setImageSize({ width: image.width * scale, height: image.height * scale });
      setCropSize(cropSize);
      setScale(scale);
      createCroppedImage({ scale, src: imageUrl, cropSize, onChangeImage: onChangeImage });
    };
  }, [imageUrl]);

  const handleDragStart = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleDragging = (event: MouseEvent) => {
      let newX = event.clientX - startX;
      let newY = event.clientY - startY;
      newX = Math.max(Math.min(newX, 0), boxSize - imageSize.width);
      newY = Math.max(Math.min(newY, 0), boxSize - imageSize.height);

      setPosition({
        x: newX,
        y: newY,
      });
    };

    const handleDragEnd = () => {
      window.removeEventListener("mousemove", handleDragging);
      window.removeEventListener("mouseup", handleDragEnd);

      createCroppedImage({
        src: imageUrl,
        scale,
        cropSize,
        position,
        onChangeImage: onChangeImage,
      });
    };
    window.addEventListener("mousemove", handleDragging);
    window.addEventListener("mouseup", handleDragEnd);
  };

  return (
    <Box
      sx={{
        width: boxSize,
        height: boxSize,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: imageSize.width,
          height: imageSize.height,
          cursor: "grab",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          transform: ` translate3d(${position.x}px, ${position.y}px, 0px) scale(1)`,
        }}
        onMouseDown={handleDragStart}
      />
    </Box>
  );
};

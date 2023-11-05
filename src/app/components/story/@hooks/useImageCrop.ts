import { useEffect } from "react";
import { ImageFileType } from "./useStoryCreateModal";

export type UseImageCropType = ReturnType<typeof useImageCrop>;

export default function useImageCrop({
  image,
  croppedImage,
  onChangeCroppedImage,
}: {
  image: ImageFileType | undefined;
  croppedImage: ImageFileType | undefined;
  onChangeCroppedImage: (image: ImageFileType) => void;
}) {
  useEffect(() => {
    if (image) {
      onChangeCroppedImage(image);
    }
  }, [image]);

  return {
    image,
    croppedImage,
    onChangeCroppedImage,
  };
}

export const createCroppedImage = ({
  src,
  scale = 0,
  cropSize,
  position = { x: 0, y: 0 },
  onChangeImage,
}: {
  src: string;
  cropSize: number;
  scale?: number;
  position?: { x: number; y: number };
  onChangeImage: (image: ImageFileType) => void;
}) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = src;

  // 크롭 영역 설정
  canvas.width = cropSize;
  canvas.height = cropSize;

  // 이미지 로드 후 처리
  image.onload = () => {
    const scaledWidth = image.width * scale;
    const scaledHeight = image.height * scale;
    let dx, dy;
    const dWidth = cropSize;
    const dHeight = cropSize;

    if (scaledWidth > scaledHeight) {
      dx = -position.x / scale;
      dy = 0;
    } else {
      dx = 0;
      dy = -position.y / scale;
    }

    ctx?.drawImage(image, dx, dy, dWidth, dHeight, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      if (blob) {
        const croppedFile = new File([blob], "cropped-image.jpg", { type: "image/jpeg" });
        const croppedImageUrl = URL.createObjectURL(croppedFile);

        onChangeImage({
          file: croppedFile,
          imageUrl: croppedImageUrl,
        });
      }
    }, "image/jpeg");
  };
};

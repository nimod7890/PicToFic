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

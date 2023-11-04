import { ImageFileType } from "./useStoryCreateModal";

export type UseImageCropType = ReturnType<typeof useImageCrop>;

export default function useImageCrop({
  croppedImage,
  setCroppedImage,
}: {
  croppedImage: ImageFileType;
  setCroppedImage: (image: ImageFileType) => void;
}) {
  return { croppedImage, setCroppedImage };
}

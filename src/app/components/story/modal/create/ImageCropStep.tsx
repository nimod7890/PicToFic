import { UseImageCropType } from "../../@hooks/useImageCrop";

export default function ImageCropStep({ croppedImage, setCroppedImage }: UseImageCropType) {
  if (!croppedImage) {
    return null;
  }
  setCroppedImage;

  return <>ImageCropStep {croppedImage.imageUrl}</>;
}

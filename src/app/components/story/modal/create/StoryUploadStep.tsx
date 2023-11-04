import { UseStoryUploadType } from "../../@hooks/useStoryUpload";

export default function StoryUploadStep({ croppedImage }: UseStoryUploadType) {
  if (!croppedImage) {
    return null;
  }
  return <>StoryUploadStep {croppedImage.imageUrl}</>;
}

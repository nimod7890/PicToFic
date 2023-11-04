import { ImageFileType } from "./useStoryCreateModal";

export type UseStoryUploadType = ReturnType<typeof useStoryUpload>;

export default function useStoryUpload({ croppedImage }: { croppedImage: ImageFileType }) {
  return { croppedImage };
}

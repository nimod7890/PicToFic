import { ImageFileType } from "./useStoryCreateModal";

export type UseStoryUploadType = ReturnType<typeof useStoryUpload>;

export default function useStoryUpload({
  image,
  description,
}: {
  image: ImageFileType | undefined;
  description: string | undefined;
}) {
  return { image, description };
}

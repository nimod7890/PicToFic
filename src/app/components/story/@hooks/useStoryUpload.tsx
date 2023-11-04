import useCreateGPTStory from "../../../hooks/story/useCreateGPTStory";
import { ImageFileType } from "./useStoryCreateModal";

export type UseStoryUploadType = ReturnType<typeof useStoryUpload>;

export default function useStoryUpload({ image }: { image: ImageFileType | undefined }) {
  const { gptStory } = useCreateGPTStory({ image });

  return { image, description: gptStory };
}

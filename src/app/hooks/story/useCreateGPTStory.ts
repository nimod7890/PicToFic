import { createGPTStory } from "../../api/createGPTStory";
import { ImageFileType } from "../../components/story/@hooks/useStoryCreateModal";

export default function useCreateGPTStory({ image }: { image: ImageFileType | undefined }) {
  const gptStory = createGPTStory({ image });
  return { gptStory, isLoading: false };
}

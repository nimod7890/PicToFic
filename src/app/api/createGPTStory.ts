import { ImageFileType } from "../components/story/@hooks/useStoryCreateModal";
import { mockStoryDescription } from "../mocks/story";

export function createGPTStory({ image }: { image: ImageFileType | undefined }): string {
  image;
  return mockStoryDescription;
}

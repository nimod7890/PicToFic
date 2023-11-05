import { ImageFileType } from "../../components/story/@hooks/useStoryCreateModal";
import { mockStoryList } from "../../mocks/story";
import { StorySchema } from "../../types/story";

export default function postStory({
  image,
  description,
}: {
  image: ImageFileType;
  description: string;
}): StorySchema {
  image;
  description;
  return mockStoryList[0];
}

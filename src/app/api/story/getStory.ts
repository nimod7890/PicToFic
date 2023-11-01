import { mockStoryList } from "../../mocks/story";
import { StorySchema } from "../../types/story";

export default function getStory({ storyId }: { storyId: number }): StorySchema {
  return mockStoryList.find(story => story.id === storyId) ?? mockStoryList[0];
}

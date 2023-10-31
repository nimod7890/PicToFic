import { mockAllStoryList } from "../../mocks/story";
import { StoryCardListSchema } from "../../types/story";

export function getStoryList(): StoryCardListSchema {
  return mockAllStoryList;
}

import { StoryCardListSchema } from "../../types/story";
import { mockStoryList, mockStoryList3 } from "../../mocks/story";

export function getStoryListByUserId({ userId }: { userId: string }): StoryCardListSchema {
  const storyList = userId === "nim_od" ? [...mockStoryList3, ...mockStoryList] : mockStoryList;
  return storyList;
}

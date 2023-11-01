import { StoryCardListSchema } from "../../types/story";
import { mockStoryCardList1, mockStoryCardList3 } from "../../mocks/story";

export function getStoryListByUserId({ userId }: { userId: string }): StoryCardListSchema {
  const storyList =
    userId === "nim_od" ? [...mockStoryCardList3, ...mockStoryCardList1] : mockStoryCardList1;
  return storyList;
}

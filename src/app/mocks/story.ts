import moment from "moment";
import { StoryCardListSchema, StoryListSchema } from "../types/story";
import { mockAnotherUser, mockMyAccount, mockUsers } from "./user";

export const mockStoryCardList1: StoryCardListSchema = Array.from({ length: 5 }).map(
  (_, index) => ({
    id: index + 1,
    summary: "Dolore est ad nostrud id dolor. ",
    likesCount: 13 + index,
    isLiked: true,
    picturedAt: moment(new Date()).format("LLL"),
  }),
);

export const mockStoryCardList2: StoryCardListSchema = Array.from({ length: 3 }).map(
  (_, index) => ({
    id: index + 6,
    summary:
      "Consequat cillum quis reprehenderit non laboris sunt proident nulla cillum. Esse est veniam do commodo velit dolor esse. Ipsum duis fugiat ullamco do. Officia nulla veniam culpa minim eu laborum cillum minim sint irure. Sit irure est ea est nulla labore mollit dolor adipisicing sint commodo magna aute excepteur. Deserunt laborum quis esse culpa magna consequat laboris pariatur adipisicing sint minim reprehenderit qui amet. Aute aute non ex eiusmod .",
    likesCount: 321 + index,
    isLiked: true,
    picturedAt: moment(new Date()).format("LLL"),
  }),
);

export const mockStoryCardList3: StoryCardListSchema = Array.from({ length: 1 }).map(
  (_, index) => ({
    id: index + 9,
    summary:
      "Dolore est ad nostrud id dolor. Sit ea consectetur labore et ea voluptate in do sit. Ut commodo deserunt laboris esse sint mollit amet labore officia irure eu cupidatat officia. Id non velit anim labore deserunt sint magna deserunt reprehenderit laboris ea ea consequat sit.",
    likesCount: 321 - 2 * index,
    isLiked: true,
    picturedAt: moment(new Date()).format("LLL"),
  }),
);

export const mockStoryCardList: StoryCardListSchema = [
  ...mockStoryCardList1,
  ...mockStoryCardList2,
  ...mockStoryCardList3,
];

export const mockStoryList: StoryListSchema = mockStoryCardList.map(storyCard => ({
  ...storyCard,
  description: "this is description" + storyCard.summary,
  imageUrl: "https://via.placeholder.com/150",
  likes: mockUsers,
  createdBy: storyCard.id % 2 ? mockMyAccount : mockAnotherUser,
  createdAt: moment(new Date()).format("LLL"),
  updatedAt: storyCard.id % 2 ? null : moment(new Date()).format("LLL"),
}));

export const mockStoryDescription =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque veritatis aut, sit magni ad ratione nostrum architecto incidunt quas reprehenderit, inventore enim quibusdam porro ipsum vitae fuga, aliquid exercitationem nulla!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque veritatis aut, sit magni ad ratione nostrum architecto incidunt quas reprehenderit, inventore enim quibusdam porro ipsum vitae fuga, aliquid exercitationem nulla!";

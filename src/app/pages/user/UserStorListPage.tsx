import GridStoryCardContainer from "../../components/story/card/GridStoryCardContainer";
import useUserStoryListPage from "../../features/user/@hooks/useUserStoryListPage";

export default function UserStoryListPage() {
  const { storyList } = useUserStoryListPage();

  return <GridStoryCardContainer storyList={storyList} />;
}

import MansonryStoryCardContainer from "../components/common/story/card/MansonryStoryCardContainer";
import useHomePage from "../features/home/@hooks/useHomePage";

export default function HomePage() {
  const { storyList } = useHomePage();

  return (
    <>
      <MansonryStoryCardContainer storyList={storyList} />
    </>
  );
}

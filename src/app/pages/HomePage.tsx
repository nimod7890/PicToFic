import MansonryPostCardContainer from "../components/common/post/card/MansonryPostCardContainer";
import useHomePage from "../features/home/@hooks/useHomePage";

export default function HomePage() {
  const { posts } = useHomePage();

  return (
    <>
      <MansonryPostCardContainer posts={posts} />
    </>
  );
}

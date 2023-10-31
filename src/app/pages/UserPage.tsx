import GridStoryCardContainer from "../components/common/story/card/GridStoryCardContainer";
import useUserPage from "../features/user/@hooks/useUserPage";
import UserProfile from "../components/common/user/UserProfile";
import NotFoundError from "../components/common/NotFoundError";

export default function UserPage() {
  const { user, storyList, isError } = useUserPage();

  if (isError || !user) {
    return <NotFoundError />;
  }

  return (
    <>
      <UserProfile user={user} />
      <GridStoryCardContainer storyList={storyList} />
    </>
  );
}

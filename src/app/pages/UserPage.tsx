import GridPostCardContainer from "../components/common/post/card/GridPostCardContainer";
import useUserPage from "../features/user/@hooks/useUserPage";
import UserProfile from "../components/common/user/UserProfile";
import NotFoundError from "../components/common/NotFoundError";

export default function UserPage() {
  const { user, posts, isError } = useUserPage();

  if (isError || !user) {
    return <NotFoundError />;
  }

  return (
    <>
      <UserProfile user={user} />
      <GridPostCardContainer posts={posts} />
    </>
  );
}

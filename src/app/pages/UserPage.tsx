import PostCardGrid from "../components/common/post/PostCardGrid";
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
      <PostCardGrid posts={posts} />
    </>
  );
}

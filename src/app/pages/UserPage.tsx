import PostCardGrid from "../components/common/post/PostCardGrid";
import useUserPage from "../features/user/@hooks/useUserPage";
import UserProfile from "../components/common/user/UserProfile";

export default function UserPage() {
  const { user, posts } = useUserPage();

  return (
    <>
      <UserProfile user={user} />
      <PostCardGrid posts={posts} />
    </>
  );
}

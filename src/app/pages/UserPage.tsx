import { Stack } from "@mui/material";
import PostCardGrid from "../components/common/post/PostCardGrid";
import useUserPage from "../features/user/@hooks/useUserPage";
import UserProfile from "../components/common/user/UserProfile";

export default function UserPage() {
  const { user, posts } = useUserPage();

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Stack spacing={"10px"} sx={{ maxWidth: "1000px" }}>
        <UserProfile user={user} />
        <PostCardGrid posts={posts} />
      </Stack>
    </Stack>
  );
}

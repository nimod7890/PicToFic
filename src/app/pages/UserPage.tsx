import { Stack } from "@mui/material";
import ImageCardGrid from "../components/common/image/ImageCardGrid";
import useUserPage from "../features/user/@hooks/useUserPage";
import UserProfile from "../components/common/user/UserProfile";

export default function UserPage() {
  const { user, images } = useUserPage();

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Stack spacing={"10px"} sx={{ maxWidth: "1000px" }}>
        <UserProfile user={user} />
        <ImageCardGrid images={images} />
      </Stack>
    </Stack>
  );
}

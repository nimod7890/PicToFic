import { Divider, Stack } from "@mui/material";
import ImageCardGrid from "../components/common/image/ImageCardGrid";
import useUserPage from "../features/user/@hooks/useUserPage";
import { border } from "../styles/colors";
import UserProfile from "../components/common/user/UserProfile";

export default function UserPage() {
  const { user, images } = useUserPage();

  return (
    <Stack spacing={"10px"}>
      <UserProfile user={user} />
      <Divider color={border} />
      <ImageCardGrid images={images} />
    </Stack>
  );
}

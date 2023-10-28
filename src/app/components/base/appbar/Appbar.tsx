import { AppBar, Box, Toolbar } from "@mui/material";
import { backgroundDefault } from "../../../styles/colors";
import CreatePostButton from "./CreatePostButton";
import UserProfileButton from "../../common/UserProfileButton";
import useAppRepository from "../../../hooks/useAppRepository";
import HomeButton from "../../common/HomeButton";
import { Layout } from "../../../constants/globalSizes";

export default function Appbar() {
  const { user } = useAppRepository();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: backgroundDefault,
        justifyContent: "center",
        height: Layout.appBarHeight,
      }}
    >
      <Toolbar>
        <HomeButton />
        <CreatePostButton />
        <Box sx={{ flexGrow: 1 }} />
        <UserProfileButton user={user} />
      </Toolbar>
    </AppBar>
  );
}

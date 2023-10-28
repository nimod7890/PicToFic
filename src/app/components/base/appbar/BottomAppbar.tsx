import { AppBar, Box, Toolbar } from "@mui/material";
import { primary } from "../../../styles/colors";
import CreatePostButton from "./CreatePostButton";
import Menu from "../../common/Menu";
import UserProfileButton from "../../common/UserProfileButton";
import useAppRepository from "../../../hooks/useAppRepository";

export default function BottomAppbar() {
  const { user } = useAppRepository();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: primary[99],
        justifyContent: "center",
        height: "50px",
      }}
    >
      <Toolbar sx={{ minHeight: "50px", height: "50px" }}>
        <Menu />
        <CreatePostButton />
        <Box sx={{ flexGrow: 1 }} />
        <UserProfileButton user={user} />
      </Toolbar>
    </AppBar>
  );
}

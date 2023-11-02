import { AppBar } from "@mui/material";
import CreateStoryButton from "./buttons/CreateStoryButton";
import UserProfileButton from "../user/UserProfileButton";
import useAppRepository from "../../hooks/useAppRepository";
import HomeButton from "./buttons/HomeButton";
import NotificationButton from "./buttons/NotificationButton";

export default function Appbar() {
  const { user } = useAppRepository();

  return (
    <AppBar sx={{ top: "auto", bottom: 0, justifyContent: "space-around" }}>
      <HomeButton />
      <CreateStoryButton />
      <NotificationButton />
      <UserProfileButton user={user} />
    </AppBar>
  );
}

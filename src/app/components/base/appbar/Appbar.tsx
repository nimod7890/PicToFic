import { AppBar } from "@mui/material";
import CreateStoryButton from "./CreateStoryButton";
import UserProfileButton from "../../user/UserProfileButton";
import useAppRepository from "../../../hooks/useAppRepository";
import HomeButton from "../HomeButton";

export default function Appbar() {
  const { user } = useAppRepository();

  return (
    <AppBar sx={{ top: "auto", bottom: 0 }}>
      <HomeButton />
      <CreateStoryButton />
      <UserProfileButton user={user} />
    </AppBar>
  );
}

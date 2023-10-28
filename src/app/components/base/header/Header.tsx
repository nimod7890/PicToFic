import { Stack } from "@mui/material";
import { primary } from "../../../styles/colors";
import logo from "../../../assets/logo.svg";
import UserAvatar from "./UserAvatar";

export default function Header() {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        width: "100%",
        height: "40px",
        backgroundColor: primary[99],
        position: "sticky",
        top: 0,
        paddingX: "20px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} height={"20px"} />
      <UserAvatar />
    </Stack>
  );
}

import { Avatar } from "@mui/material";
import { primary } from "../../../styles/colors";

/* Todo: use user info */
export default function UserAvatar() {
  return (
    <Avatar
      sx={{
        width: "24px",
        height: "24px",
        backgroundColor: primary[60],
      }}
    />
  );
}

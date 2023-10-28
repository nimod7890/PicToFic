import { Avatar } from "@mui/material";
import { primary } from "../../styles/colors";
import { UserSchema } from "../types/user";

type UserAvatarProps = {
  user: UserSchema;
};

export default function UserAvatar({ user }: UserAvatarProps) {
  user;

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

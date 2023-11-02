import { Avatar } from "@mui/material";
import { UserSchema } from "../../types/user";

type UserAvatarProps = {
  user: UserSchema;
  configs?: {
    length?: string;
  };
};

export default function UserAvatar({ user, configs = {} }: UserAvatarProps) {
  user;
  const { length = "24px" } = configs;
  return (
    <Avatar
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.54)",
        width: length,
        height: length,
      }}
    />
  );
}

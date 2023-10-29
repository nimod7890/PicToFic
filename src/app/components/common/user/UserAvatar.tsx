import { Avatar } from "@mui/material";
import { primary } from "../../../styles/colors";
import { UserSchema } from "../../../types/user";

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
        width: length,
        height: length,
        backgroundColor: primary[60],
      }}
    />
  );
}

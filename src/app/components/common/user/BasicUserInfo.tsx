import { UserSchema } from "../../../types/user";
import { Stack, Typography } from "@mui/material";
import UserAvatar from "./UserAvatar";

type BasicUserInfoProps = { user: UserSchema };

export default function BasicUserInfo({ user }: BasicUserInfoProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <UserAvatar user={user} configs={{ length: "50px" }} />
      <Stack>
        <Typography variant="h5">{user.name}</Typography>
        <Typography>@{user.id}</Typography>
      </Stack>
    </Stack>
  );
}

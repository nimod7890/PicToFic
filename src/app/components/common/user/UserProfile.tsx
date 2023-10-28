import { Stack, Typography } from "@mui/material";
import { UserSchema } from "../../../types/user";
import UserAvatar from "./UserAvatar";

type UserProfileProps = { user: UserSchema };

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ padding: "10px", alignItems: "center", justifyContent: "space-between" }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <UserAvatar user={user} configs={{ length: "50px" }} />
        <Stack>
          <Typography variant="h5">{user.name}</Typography>
          <Typography>@{user.accountId}</Typography>
        </Stack>
      </Stack>
      {/* Todo additional info */}
    </Stack>
  );
}

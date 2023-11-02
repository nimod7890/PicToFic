import { Paper, Stack } from "@mui/material";
import { UserSchema } from "../../types/user";
import BasicUserInfo from "./BasicUserInfo";

type UserProfileProps = { user: UserSchema };

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <Stack
      component={Paper}
      direction="row"
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <BasicUserInfo user={user} />
      {/* Todo additional info */}
    </Stack>
  );
}

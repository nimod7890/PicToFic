/* Todo: use user info */
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserSchema } from "../types/user";

/* Todo: use user info */

type UserProfileButtonProps = {
  user: UserSchema;
};
export default function UserProfileButton({ user }: UserProfileButtonProps) {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(`/${user.accountId}`)}>
      <UserProfileButton user={user} />
    </IconButton>
  );
}

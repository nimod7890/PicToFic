import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserSchema } from "../../../types/user";
import UserAvatar from "./UserAvatar";
import { getUserPagePath } from "../../../routes/routePath";

type UserProfileButtonProps = {
  user: UserSchema;
};

export default function UserProfileButton({ user }: UserProfileButtonProps) {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(getUserPagePath(user.id))}>
      <UserAvatar user={user} />
    </IconButton>
  );
}

import { UserSchema } from "../../types/user";
import UserAvatar from "./UserAvatar";
import { getUserPagePath } from "../../routes/routePath";
import RouteButton from "../base/RouteButton";

type UserProfileButtonProps = {
  user: UserSchema;
};

export default function UserProfileButton({ user }: UserProfileButtonProps) {
  return <RouteButton to={getUserPagePath(user.id)} icon={<UserAvatar user={user} />} />;
}

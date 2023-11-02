import useUserPage from "../../features/user/@hooks/useUserPage";
import UserProfile from "../../components/user/UserProfile";
import UserContentsTab from "../../components/user/UserContentsTab";

export default function UserPage() {
  const { user } = useUserPage();
  if (!user) {
    return null;
  }

  return (
    <>
      <UserProfile user={user} />
      <UserContentsTab userId={user.id} />
    </>
  );
}

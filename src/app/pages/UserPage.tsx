import useAppRepository from "../hooks/useAppRepository";

export default function UserPage() {
  const { user } = useAppRepository();

  return <>{user.accountId}</>;
}

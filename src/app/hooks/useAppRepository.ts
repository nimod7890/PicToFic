import { getUser } from "../api/user/getUser";

export default function useAppRepository() {
  const user = getUser();

  return { user };
}

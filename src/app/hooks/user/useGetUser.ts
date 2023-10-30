import { getUser } from "../../api/user/getUser";

export default function useGetUser() {
  const user = getUser();
  return { user };
}

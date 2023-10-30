import { getUserByUserId } from "../../api/user/getUserByUserId";

type useGetUserByUserIdProps = { id: string };

export default function useGetUserByUserId({ id }: useGetUserByUserIdProps) {
  const user = getUserByUserId({ id });
  return { user };
}

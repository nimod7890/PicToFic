import { UserSchema } from "../../types/user";
import useAppRepository from "../useAppRepository";

type useGetUserProps = { id: string };

export default function useGetUser({ id }: useGetUserProps) {
  const { user: myAccount } = useAppRepository();
  const user = myAccount.id === id ? myAccount : mockAnotherUser;

  return { user };
}

const mockAnotherUser: UserSchema = {
  id: "user1_id",
  name: "user1",
};

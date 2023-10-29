import { UserSchema } from "../../types/user";
import { mockMyAccount } from "./getUser";

// export async function getUser(): Promise<UserSchema> {
export function getUserByUserId({ id }: { id: string }): UserSchema | undefined {
  return users.find(user => id === user.id);
}
const mockAnotherUser: UserSchema = {
  id: "user1_id",
  name: "user1",
};
const users = [mockAnotherUser, mockMyAccount];

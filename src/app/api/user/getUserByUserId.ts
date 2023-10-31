import { mockUsers } from "../../mocks/user";
import { UserSchema } from "../../types/user";

// export async function getUser(): Promise<UserSchema> {
export function getUserByUserId({ id }: { id: string }): UserSchema | undefined {
  return mockUsers.find(user => id === user.id);
}

import { mockMyAccount } from "../../mocks/user";
import { UserSchema } from "../../types/user";

// export async function getUser(): Promise<UserSchema> {
export function getUser(): UserSchema {
  return mockMyAccount;
}

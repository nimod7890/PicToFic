import { UserSchema } from "../../types/user";

// export async function getUser(): Promise<UserSchema> {
export function getUser(): UserSchema {
  return mockMyAccount;
}

export const mockMyAccount: UserSchema = {
  id: "nim_od",
  name: "bomin",
};

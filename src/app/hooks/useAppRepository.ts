import { UserSchema } from "../types/user";

const mockMyAccount: UserSchema = {
  id: "nim_od",
  name: "bomin",
};

export default function useAppRepository() {
  return { user: mockMyAccount };
}

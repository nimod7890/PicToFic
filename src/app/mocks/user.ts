import { UserSchema } from "../types/user";

export const mockMyAccount: UserSchema = {
  id: "nim_od",
  name: "bomin",
};

const mockAnotherUser: UserSchema = {
  id: "user1_id",
  name: "user1",
};

export const mockUsers = [mockAnotherUser, mockMyAccount];

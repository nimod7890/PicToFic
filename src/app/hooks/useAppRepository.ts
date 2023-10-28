const mockUser = {
  id: 1,
  name: "bomin",
  accountId: "nim_od",
  email: "nimod1234@g.skku.edu",
};

export default function useAppRepository() {
  return { user: mockUser };
}

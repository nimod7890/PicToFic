enum RoutePath {
  Index = "/",
  Home = "/",

  User = "/:userId",

  Login = "/",
}

export default RoutePath;

export function getUserPagePath(userId: string) {
  return RoutePath.User.replace(":userId", String(userId));
}

enum RoutePath {
  Index = "/",
  Home = "/",
  User = "/:userAccountId",

  NotFoundError = "/404",
}

export default RoutePath;

export function getUserPagePath(userId: string) {
  return RoutePath.User.replace(":userAccountId", String(userId));
}

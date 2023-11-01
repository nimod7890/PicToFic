enum RoutePath {
  Index = "/",
  Home = "/",

  User = "/:userId",
  Story = "/story/:storyId",

  Login = "/",
}

export default RoutePath;

export function getUserPagePath(userId: string) {
  return RoutePath.User.replace(":userId", String(userId));
}
export function getStoryPagePath(storyId: number) {
  return RoutePath.Story.replace(":storyId", String(storyId));
}

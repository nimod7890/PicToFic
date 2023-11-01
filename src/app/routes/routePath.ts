enum RoutePath {
  Index = "/",
  Home = "/",

  User = "/:userId",
  Frame = "frame",
  Snap = "snap",
  UserFrame = "/:userId/frame",
  UserSnap = "/:userId/snap",

  Story = "/story/:storyId",

  Login = "/",
}

export default RoutePath;

export function getUserPagePath(userId: string) {
  return RoutePath.User.replace(":userId", String(userId));
}

export function getFramePagePath(userId: string) {
  return RoutePath.UserFrame.replace(":userId", String(userId));
}

export function getSnapPagePath(userId: string) {
  return RoutePath.UserSnap.replace(":userId", String(userId));
}

export function getStoryPagePath(storyId: number) {
  return RoutePath.Story.replace(":storyId", String(storyId));
}

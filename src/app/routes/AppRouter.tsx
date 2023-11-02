import { Routes, Route } from "react-router-dom";
import useAuthStorage from "../hooks/useAuthStorage";
import AuthenticatedBasePage from "../pages/AuthenticatedBasePage";
import HomePage from "../pages/HomePage";
import StoryPage from "../pages/StoryPage";
import UserPage from "../pages/ user/UserPage";
import RoutePath from "./routePath";
import UnauthenticatedBasePage from "../pages/UnauthenticatedBasePage";
import UserGridStoryCardListPage from "../pages/ user/UserGridStoryCardListPage";

export default function AppRouter() {
  const { isEmptyToken } = useAuthStorage();

  return (
    <Routes>
      <Route
        path={RoutePath.Index}
        element={isEmptyToken ? <UnauthenticatedBasePage /> : <AuthenticatedBasePage />}
      >
        <Route index element={isEmptyToken ? "loginPage" : <HomePage />} />
        <Route path={RoutePath.Story} element={<StoryPage />} />
        <Route path={RoutePath.User} element={<UserPage />}>
          <Route index element={<UserGridStoryCardListPage />} />
          <Route path={RoutePath.Frame} element={<>Frames Content</>} />
          <Route path={RoutePath.Snap} element={<>User Snap Content</>} />
        </Route>
      </Route>
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import AuthenticatedBasePage from "../pages/AuthenticatedBasePage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import RoutePath from "./routePath";
import StoryPage from "../pages/StoryPage";

export default function AuthenticatedRouter() {
  return (
    <Routes>
      <Route path={RoutePath.Index} element={<AuthenticatedBasePage />}>
        <Route path={RoutePath.Home} element={<HomePage />} />
        <Route path={RoutePath.Story} element={<StoryPage />} />
        <Route path={RoutePath.User} element={<UserPage />} />
      </Route>
    </Routes>
  );
}

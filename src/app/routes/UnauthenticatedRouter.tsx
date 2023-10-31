import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage";
import RoutePath from "./routePath";
import UnauthenticatedBasePage from "../pages/UnauthenticatedBasePage";
import StoryPage from "../pages/StoryPage";

export default function UnauthenticatedRouter() {
  return (
    <Routes>
      <Route path={RoutePath.Index} element={<UnauthenticatedBasePage />}>
        <Route path={RoutePath.Login} element={"login page"} />
        <Route path={RoutePath.Story} element={<StoryPage />} />
        <Route path="*" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

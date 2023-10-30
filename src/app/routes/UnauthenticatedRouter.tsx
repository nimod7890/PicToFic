import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage";
import RoutePath from "./routePath";
import UnauthenticatedBasePage from "../pages/UnauthenticatedBasePage";

export default function UnauthenticatedRouter() {
  return (
    <Routes>
      <Route path={RoutePath.Index} element={<UnauthenticatedBasePage />}>
        <Route path={RoutePath.Login} element={"login page"} />
        <Route path="*" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

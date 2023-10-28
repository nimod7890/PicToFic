import { Navigate, Route, Routes } from "react-router-dom";
import RoutePath from "./routePath";
import BasePage from "../pages/BasePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={RoutePath.Index} element={<BasePage />}>
        <Route path={RoutePath.Home} element={"home page"} />
      </Route>
      <Route path={RoutePath.Login} element={"login"} />
      <Route path={RoutePath.NotFoundError} element={<Navigate to={RoutePath.NotFoundError} />} />
      <Route path="*" element={"404 NON FOUND"} />
    </Routes>
  );
}

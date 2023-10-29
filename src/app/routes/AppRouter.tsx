import { Navigate, Route, Routes } from "react-router-dom";
import RoutePath, { getUserPagePath } from "./routePath";
import useAppRepository from "../hooks/useAppRepository";
import BasePage from "../pages/BasePage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

export default function AppRouter() {
  /* Todo: if not token, show login page*/
  const { user } = useAppRepository();

  return (
    <Routes>
      <Route path={RoutePath.Index} element={<BasePage />}>
        <Route path={RoutePath.Home} element={<HomePage />} />
        <Route path={getUserPagePath(user.id)} element={<UserPage />} />
      </Route>
      <Route path={RoutePath.NotFoundError} element={<Navigate to={RoutePath.NotFoundError} />} />
      <Route path="*" element={"404 NON FOUND"} />
    </Routes>
  );
}

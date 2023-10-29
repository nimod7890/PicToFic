import { Route, Routes } from "react-router-dom";
import RoutePath from "./routePath";
import BasePage from "../pages/BasePage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import useAuthStorage from "../hooks/useAuthStorage";

export default function AppRouter() {
  const { isEmptyToken } = useAuthStorage();

  return (
    <Routes>
      {isEmptyToken ? (
        <>
          {/* if token does not exists */}
          <Route path={RoutePath.Login} element={"login page"} />
          <Route path="*" element={<UserPage />} />
        </>
      ) : (
        <>
          {/* if token exists */}
          <Route path={RoutePath.Index} element={<BasePage />}>
            <Route path={RoutePath.Home} element={<HomePage />} />
            <Route path="*" element={<UserPage />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

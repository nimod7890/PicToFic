import useAuthStorage from "../hooks/useAuthStorage";
import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";

export default function AppRouter() {
  const { isEmptyToken } = useAuthStorage();

  return isEmptyToken ? <UnauthenticatedRouter /> : <AuthenticatedRouter />;
}

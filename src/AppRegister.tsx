import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactQuerySetting from "./app/libraries/reactQuery";

type AppRegisterProps = { children: ReactNode };

export default function AppRegister({ children }: AppRegisterProps) {
  return (
    <ReactQuerySetting>
      <BrowserRouter>{children}</BrowserRouter>
    </ReactQuerySetting>
  );
}

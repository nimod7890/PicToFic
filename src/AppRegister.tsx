import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactQuerySetting from "./app/libraries/reactQuery";
import MuiSetting from "./app/libraries/mui";

type AppRegisterProps = { children: ReactNode };

export default function AppRegister({ children }: AppRegisterProps) {
  return (
    <MuiSetting>
      <ReactQuerySetting>
        <BrowserRouter>{children}</BrowserRouter>
      </ReactQuerySetting>
    </MuiSetting>
  );
}

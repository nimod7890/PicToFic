import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactQuerySetting from "./libraries/reactQuery";
import MuiSetting from "./libraries/mui";

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

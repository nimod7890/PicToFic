import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "./theme";

type MuiSettingProps = {
  children: ReactNode;
};

export default function MuiSetting({ children }: MuiSettingProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

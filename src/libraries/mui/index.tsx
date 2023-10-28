import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "app/libraries/mui/theme";
import { ReactNode } from "react";

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

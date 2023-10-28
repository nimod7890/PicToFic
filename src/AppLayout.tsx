import { Stack } from "@mui/material";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <Stack sx={{ width: "100%", height: "100%" }}>{children}</Stack>;
}

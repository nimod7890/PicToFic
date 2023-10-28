import { Stack } from "@mui/material";
import BottomAppbar from "../components/base/appbar/BottomAppbar";
import Header from "../components/base/header/Header";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <Stack sx={{ width: "100%", height: "100%", backgroundColor: "gray" }}>
      <Header />
      <Outlet />
      <BottomAppbar />
    </Stack>
  );
}

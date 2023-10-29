import { Stack } from "@mui/material";
import Appbar from "../components/base/appbar/Appbar";
import Header from "../components/base/header/Header";
import { Outlet } from "react-router-dom";
import { Layout } from "../constants/globalSizes";

export default function BasePage() {
  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: Layout.bodyHeight,
        paddingBottom: Layout.appBarHeight,
      }}
    >
      <Header />
      <Stack sx={{ padding: "50px 10px 100px 10px", alignItems: "center" }}>
        <Stack spacing={"10px"} sx={{ minWidth: "700px", maxWidth: "1000px", width: "100%" }}>
          <Outlet />
        </Stack>
      </Stack>
      <Appbar />
    </Stack>
  );
}

import { Box, Stack } from "@mui/material";
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
      <Box sx={{ padding: "10px" }}>
        <Outlet />
      </Box>
      <Appbar />
    </Stack>
  );
}

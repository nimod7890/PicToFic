import { Stack } from "@mui/material";
import Appbar from "../components/base/appbar/Appbar";
import Header from "../components/base/header/Header";
import { Layout } from "../constants/globalSizes";
import MainContent from "../components/base/MainContent";

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
      <MainContent />
      <Appbar />
    </Stack>
  );
}

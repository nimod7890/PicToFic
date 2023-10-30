import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Layout } from "../../constants/globalSizes";

export default function MainContent() {
  return (
    <Stack sx={{ padding: "50px 10px 100px 10px", alignItems: "center" }}>
      <Stack
        spacing={"10px"}
        sx={{ minWidth: Layout.bodyMinWidth, maxWidth: Layout.bodyMaxWidth, width: "100%" }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
}

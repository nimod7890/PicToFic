import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <Stack sx={{ padding: "50px 10px 100px 10px", alignItems: "center" }}>
      <Stack spacing={"10px"} sx={{ minWidth: "340px", maxWidth: "1000px", width: "100%" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
}

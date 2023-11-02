import logo from "../../assets/pic2fic.svg";
import logoIcon from "../../assets/logoPink.svg";
import { Stack } from "@mui/material";

export default function Logo() {
  return (
    <Stack direction="row" spacing="6px" alignItems="center">
      <img src={logoIcon} height={"24px"} />
      <img src={logo} height={"20px"} />;
    </Stack>
  );
}

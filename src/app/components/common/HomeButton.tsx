import { IconButton } from "@mui/material";
import logo from "../../assets/logoPink.svg";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../routes/routePath";

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(RoutePath.Home)}>
      <img src={logo} height={"30px"} />
    </IconButton>
  );
}

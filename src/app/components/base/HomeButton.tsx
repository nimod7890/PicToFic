import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../routes/routePath";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(RoutePath.Home)}>
      <HomeRoundedIcon />
    </IconButton>
  );
}

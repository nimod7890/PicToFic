import RoutePath from "../../../routes/routePath";
import { HomeRounded as HomeRoundedIcon } from "@mui/icons-material";
import RouteButton from "../RouteButton";

export default function HomeButton() {
  return <RouteButton to={RoutePath.Home} icon={<HomeRoundedIcon />} />;
}

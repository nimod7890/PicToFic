import { Button } from "@mui/material";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../../routes/routePath";

export default function HomeLogoButton() {
  const navigate = useNavigate();

  return (
    <Button color="secondary" onClick={() => navigate(RoutePath.Home)}>
      <Logo />
    </Button>
  );
}

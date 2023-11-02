import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type RouteButtonProps = { to: string; icon: ReactNode };

export default function RouteButton({ to, icon }: RouteButtonProps) {
  return (
    <Link to={to}>
      <IconButton>{icon}</IconButton>
    </Link>
  );
}

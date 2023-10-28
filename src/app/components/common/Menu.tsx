import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

export default function Menu() {
  return (
    <IconButton color="primary" aria-label="open drawer">
      <MenuRoundedIcon />
    </IconButton>
  );
}

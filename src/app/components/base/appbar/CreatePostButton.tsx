import { Fab } from "@mui/material";
import { primary } from "../../../styles/colors";
import { AddRounded as AddRoundedIcon } from "@mui/icons-material";

export default function CreatePostButton() {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "absolute",
        zIndex: 1,
        top: -20,
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "50px",
        height: "50px",
      }}
    >
      <AddRoundedIcon sx={{ color: primary[90] }} />
    </Fab>
  );
}

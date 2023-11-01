import { Tooltip, Zoom, Typography } from "@mui/material";
import { neutral } from "../../../../styles/colors";

type PicturedDateProps = { date: string };

export default function PicturedDate({ date }: PicturedDateProps) {
  return (
    <Tooltip title="Captured at" enterDelay={1000} TransitionComponent={Zoom}>
      <Typography variant="caption" color={neutral[70]}>
        {date}
      </Typography>
    </Tooltip>
  );
}

import { Components } from "@mui/material";

export const MuiComponents: Components = {
  MuiPaper: {
    defaultProps: { elevation: 3 },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        width: 40,
        height: 40,
      },
    },
  },
};

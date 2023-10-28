import { PaletteOptions } from "@mui/material";
import { alert, background, error, neutral, primary } from "styles/color";

export const MuiPalette: PaletteOptions = {
  background: {
    default: background,
  },
  primary: {
    main: primary[60],
    contrastText: primary[100],
  },
  secondary: {
    main: neutral[60],
  },
  error: {
    main: error,
  },
  warning: {
    main: alert,
  },
};

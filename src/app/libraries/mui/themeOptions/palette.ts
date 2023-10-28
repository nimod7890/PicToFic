import { PaletteOptions } from "@mui/material";
import { alert, backgroundDefault, error, neutral, primary } from "../../../styles/colors";

export const MuiPalette: PaletteOptions = {
  background: {
    default: backgroundDefault,
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

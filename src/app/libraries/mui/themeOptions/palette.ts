import { PaletteOptions } from "@mui/material";
import { alert, backgroundDefault, error, primary, secondary } from "../../../styles/colors";

export const MuiPalette: PaletteOptions = {
  background: {
    default: backgroundDefault,
  },
  primary: {
    main: primary[60],
    contrastText: primary[100],
  },
  secondary: {
    main: secondary[60],
    contrastText: primary[100],
  },
  error: {
    main: error,
  },
  warning: {
    main: alert,
  },
};

import { Components } from "@mui/material";
import { Layout } from "../../../constants/globalSizes";
import { backgroundDefault } from "../../../styles/colors";

export const MuiComponents: Components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        position: "fixed",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 1rem",
        justifyContent: "space-between",
        height: Layout.appBarHeight,
        backgroundColor: backgroundDefault,
      },
    },
  },
  MuiPaper: {
    defaultProps: { elevation: 3 },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

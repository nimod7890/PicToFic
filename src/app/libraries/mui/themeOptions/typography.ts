import { TypographyOptions } from "@mui/material/styles/createTypography";

export const MuiTypography: TypographyOptions = {
  fontFamily: [
    "Pretendard Variable",
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ].join(","),
  h4: {
    //Title xLarge
    fontWeight: "600",
    fontSize: "36px",
  },
  h5: {
    //Title Large
    fontWeight: "700",
    fontSize: "24px",
  },
  h6: {
    //Title Medium
    fontWeight: "700",
    fontSize: "20px",
  },
  subtitle1: {
    fontWeight: "700",
    fontSize: "18px",
  },
  body1: {
    // fontWeight: '400',
    // fontSize: 16px,
  },
  body2: {
    fontWeight: "700",
    // fontSize:'14px'
  },
  caption: {
    fontSize: "12px",
  },
} as const;

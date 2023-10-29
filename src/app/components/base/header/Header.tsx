import { AppBar, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import Logo from "../../common/Logo";
import React from "react";
import Menu from "../../common/Menu";
import { Layout } from "../../../constants/globalSizes";
import { backgroundDefault } from "../../../styles/colors";

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          width: "100%",
          height: Layout.appBarHeight,
          backgroundColor: backgroundDefault,
          position: "sticky",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Menu />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

type HideOnScrollProps = {
  window?: () => Window;
  children: React.ReactElement;
};

function HideOnScroll({ children, window }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

import { AppBar, Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import MenuButton from "../MenuButton";
import HomeLogoButton from "../HomeLogoButton";

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar sx={{ top: 0 }}>
        <HomeLogoButton />
        <MenuButton />
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

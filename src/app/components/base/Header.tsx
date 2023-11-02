import { AppBar, Box, Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import MenuButton from "./buttons/MenuButton";
import HomeLogoButton from "./buttons/HomeLogoButton";
import SearchButton from "./SearchButton";

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar sx={{ top: 0 }}>
        <HomeLogoButton />
        <Box flexGrow={1} />
        <SearchButton />
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

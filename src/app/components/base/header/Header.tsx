import { Slide, Stack, useScrollTrigger } from "@mui/material";
import { primary } from "../../../styles/colors";
import Logo from "../../common/Logo";
import React from "react";
import Menu from "../../common/Menu";

export default function Header() {
  return (
    <HideOnScroll>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: primary[99],
          position: "sticky",
          top: 0,
          paddingX: "20px",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <Logo />
        <Menu />
      </Stack>
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

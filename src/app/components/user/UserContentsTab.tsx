import { Tabs, Paper, Tab } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { getUserPagePath, getFramePagePath, getSnapPagePath } from "../../routes/routePath";
import { useState } from "react";
import {
  AppsRounded as AppsRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
  FilterRounded as FilterRoundedIcon,
} from "@mui/icons-material";

type UserContentsTabProps = { userId: string };

export default function UserContentsTab({ userId }: UserContentsTabProps) {
  const [tabValue, setTabValue] = useState<number>(0);

  return (
    <>
      <Tabs
        variant="fullWidth"
        value={tabValue}
        component={Paper}
        onChange={(_, value) => setTabValue(value)}
      >
        <Tab to={getUserPagePath(userId)} {...tabProps(0)} />
        <Tab to={getFramePagePath(userId)} {...tabProps(1)} />
        <Tab to={getSnapPagePath(userId)} {...tabProps(2)} />
      </Tabs>
      <Paper sx={{ padding: 2 }}>
        <Outlet />
      </Paper>
    </>
  );
}

function tabProps(index: number) {
  return {
    "icon": (() => {
      switch (index) {
        case 0:
          return <AppsRoundedIcon />;
        case 1:
          return <FilterRoundedIcon />;
        case 2:
          return <FavoriteRoundedIcon />;
      }
    })(),
    "id": `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    "component": Link,
  };
}

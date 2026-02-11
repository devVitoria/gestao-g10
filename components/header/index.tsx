"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuDrawer from "./utils/components/menu-drawer";
import { FaHouseChimney } from "react-icons/fa6";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type MenuAppBarProps = {
  router: AppRouterInstance;
  menuName?: string;
};
export default function MenuAppBar({
  router,
  menuName = "Menu",
}: MenuAppBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showMenuDrawer, setShowMenuDrawer] = React.useState(false);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBackHome = () => {
    router.back();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex-1  top-0">
      <Box sx={{ flexGrow: 1, width: "100vw" }}>
        <AppBar
          variant="elevation"
          position="static"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className="opacity-70"
              sx={{ mr: 2 }}
              onClick={() => {
                setShowMenuDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="italic opacity-70 font-bold text-"
              sx={{ flexGrow: 1 }}
            >
              {menuName}
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className="opacity-70"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {menuName !== "Menu" && (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  className="opacity-70"
                  onClick={handleBackHome}
                  color="inherit"
                >
                  <FaHouseChimney className="h-5 w-5" />
                </IconButton>
              )}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuDrawer
        open={showMenuDrawer}
        setOpen={setShowMenuDrawer}
        router={router}
      />
    </div>
  );
}

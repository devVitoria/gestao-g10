"use client";
import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import grzLogo from "../../../../assets/images/grz-logo.png";
import { IoCalendarNumberSharp } from "react-icons/io5";

interface MenuDrawerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
export default function MenuDrawer({ setOpen, open }: MenuDrawerProps) {
  return (
    <SwipeableDrawer
      anchor={"left"}
      style={{ width: "100vw" }}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#1c1c1b",
          minWidth: window.innerWidth * 0.2,
          borderTopRightRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <div className="flex flex-1 p-6 flex-col gap-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2">
            <img
              src={grzLogo.src}
              style={{
                width: 16,
                height: 16,
              }}
            />
            <p className="italic opacity-70 text-base text-white/80">
              Gestão G-10
            </p>
          </div>
          <p className="italic opacity-70 text-xs text-white/80">2026</p>
        </div>

        <div className="flex flex-row justify-start items-start gap-2 ">
          <IoCalendarNumberSharp color="#9A9A9A" width={14} height={14} />

          <p className="italic opacity-70 text-sm text-white/80 hover:text-white">
            Calendário de reuniões
          </p>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

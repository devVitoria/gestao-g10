'use client'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import grzLogo from "../../../../assets/images/grz-logo.png";
import { MenuDrawerProps } from "../interface";
import { menuOptions } from "../constants";

export default function MenuDrawer({ setOpen, open, router }: MenuDrawerProps) {
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
      <div className="flex w-full flex-1 p-4 flex-col gap-6">
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
        <div className="flex w-full flex-col gap-4">
          {menuOptions.map((o) => (
            <div
              className="flex flex-row justify-start items-center gap-1"
              onClick={() =>
                router.push(o.path ?? "")
              }
            >
              {o.icon}
              <p className="italic opacity-70 text-xs text-white/80 hover:text-white hover:cursor-pointer hover:font-bold">
                {o.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SwipeableDrawer>
  );
}

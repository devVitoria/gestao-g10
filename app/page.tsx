"use client";
import Threads from "@/components/home-background/threads-file";
import MenuAppBar from "../components/header";
import SwipeableTemporaryDrawer from "@/components/header/utils/components/menu-drawer";
import MenuDrawer from "@/components/header/utils/components/menu-drawer";
import React, { useState } from "react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex-1 w-full h-150  absolute">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      <div className="flex flex-col items-start w-full">
        <MenuAppBar />
        <div className="mt-10 p-5">
          <p className="italic opacity-70 font-bold text-xl">
            Gestão G-10 {currentYear}.
          </p>
          <p className="italic opacity-70 text-sm">
            Bem vindo. Navegue pelo menu acima.
          </p>
        </div>
      </div>
    </>
  );
}

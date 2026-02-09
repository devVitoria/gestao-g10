import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { NextRouter } from "next/router";
import React from "react";

export interface MenuDrawerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
   router: AppRouterInstance
}

export interface OptionMenuProps {
    title: string
    path?: string
    icon: React.ReactNode
}
"use client";
import MenuAppBar from "@/components/header";
import { useRouter } from "next/navigation";

export default function Members() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start w-full bg-black/50">
      <MenuAppBar router={router} menuName={"Integrantes"} />
    </div>
  );
}

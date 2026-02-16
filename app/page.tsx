'use client'
import Threads from "@/components/pages/home-utils/home-background/threads-file";
import MenuAppBar from "../components/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const currentYear = new Date().getFullYear();
   const router = useRouter()


  return (
    <>
      <div className="flex-1 w-full h-150  absolute">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      <div className="flex flex-col items-start w-full">
        <MenuAppBar router={router} />
        <div className="p-5">
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

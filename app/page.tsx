import Threads from "@/components/home-background/threads-file";
import MenuAppBar from "../components/header";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-150 relative">
      <div className="flex flex-col items-start absolute top-0 w-full left-0 right-0"> 
        <MenuAppBar />
        <div className="p-5">
          <p className="italic opacity-70 font-bold text-xl">
            Gestão G-10 {currentYear}.
          </p>
          <p className="italic opacity-70 text-sm">
            Bem vindo. Navegue pelo menu acima.
          </p>
        </div>
      </div>

      <Threads amplitude={1} distance={0} enableMouseInteraction />
    </div>
  );
}

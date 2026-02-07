import Threads from "@/components/home-background/threads-file";


export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-150 relative">
      <div className="flex flex-col gap-2 items-start absolute left-5 top-5 ">
      <p className="italic opacity-70 font-bold text-xl">Gestão G-10 {currentYear}.</p>
      <p className="italic opacity-70 text-sm">
        Bem vindo. Navegue pelo menu acima.
      </p>
      </div>

      <Threads amplitude={1} distance={0} enableMouseInteraction />
    </div>
  );
}

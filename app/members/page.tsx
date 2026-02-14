"use client";
import MenuAppBar from "@/components/header";
import { useRouter } from "next/navigation";

export default function Members() {
  const router = useRouter();

  const mockUserInfo = [{
    name: 'Vitória',
    birthday: '25/01',
    flagBirth: true,
    active: true
  }, {
    name: 'Teste',
    birthday: '25/10',
    flagBirth: false,
    active: true
  },{
    name: 'Teste2',
    birthday: '25/12',
    flagBirth: false,
    active: false
  }]

  return (
    <div className="flex flex-col items-start w-full bg-black/50">
      <MenuAppBar router={router} menuName={"Integrantes"} />
    </div>
  );
}

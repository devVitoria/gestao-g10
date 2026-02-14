import { ColumnDef } from "@tanstack/react-table";
import { mockUserInfoType } from "./interface";

export const mockUserInfo: mockUserInfoType[] = [{
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

  const columns: ColumnDef<mockUserInfoType>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "birthday",
    header: "Aniversário",
  },
   {
    accessorKey: "flagBirth",
    header: "Fez Aniversário",
  },
   {
    accessorKey: "active",
    header: "Ativo",
  },
];

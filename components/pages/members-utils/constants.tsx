import { ColumnDef } from "@tanstack/react-table";
import { MemberFieldsDetailsProps, MockUserInfoType } from "./interface";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

export const mockUserInfo: MockUserInfoType[] = [
  {
    name: "Vitória",
    birthday: "25/01",
    flagBirth: "true",
    active: "true",
  },

];

export const columns: ColumnDef<MockUserInfoType>[] = [
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
  {
    header: "Desativar",
  },
];


export const membersFields = {
  name: "",
  birthday: "",
};

export const memberFieldsInputDetails: Record<
  keyof typeof membersFields,
  MemberFieldsDetailsProps
> = {
  name: {
    title: "Nome do membro",
    placeholder: "Nome",
    subtitle: "Insira o nome do novo membro",
    icon: (
      <MdDriveFileRenameOutline
        color="white"
        className=" w-3 h-3"
      />
    ),

    type: "text",
  },

  birthday: {
    title: "Data de aniversário",
    placeholder: "25/01",
        subtitle: "Insira o aniversário do membro",

    icon: (
      <LiaBirthdayCakeSolid color="white" className=" w-3 h-3" />
    ),

    type: "date",
  },
};

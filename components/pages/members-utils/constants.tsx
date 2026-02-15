import { ColumnDef } from "@tanstack/react-table";
import { memberFieldsDetailsProps, mockUserInfoType } from "./interface";
import { MdDriveFileRenameOutline, MdTextFields } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

export const mockUserInfo: mockUserInfoType[] = [
  {
    name: "Vitória",
    birthday: "25/01",
    flagBirth: "true",
    active: "true",
  },

];

export const columns: ColumnDef<mockUserInfoType>[] = [
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

export const renderIndicator = (ind: string) => {
  const isBool = ind === "true" || ind === "false";
  if (!isBool) {
    return null;
  }

  if (ind === "true") {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="w-16 h-6  rounded-2xl flex justify-center items-center">
          <p className="text-green-600/50 font-bold">Sim</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-16 h-6 rounded-2xl flex justify-center items-center">
        <p className="text-red-600/50 font-bold">Não</p>
      </div>
    </div>
  );
};
export const membersFields = {
  name: "",
  birthday: "",
};

export const memberFieldsDetails: Record<
  keyof typeof membersFields,
  memberFieldsDetailsProps
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

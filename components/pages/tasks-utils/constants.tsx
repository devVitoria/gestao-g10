import { ColumnDef } from "@tanstack/react-table";
import { MdDriveFileRenameOutline, MdOutlineTimeline,  } from "react-icons/md";
import { MockTasksFields, TaskFieldsInputProps } from "./interface";
import { FaRegCalendarCheck, FaUserTie } from "react-icons/fa";
import { VscLayersActive } from "react-icons/vsc";

export const mockTask: MockTasksFields[] = [
  {
    name: "Vitória",
    task: "Supervisionar máquina de café (insumos)",
    period: "01/02/2026 à 02/01/2027",
    recurrence: "seg-quar-sex",
  },
    {
    name: "Vitória",
    task: "Supervisionar máquina de café (limpeza)",
    period: "01/02/2026 à 02/01/2027",
    recurrence: "seg",
  },

];

export const columns: ColumnDef<MockTasksFields>[] = [
  {
    accessorKey: "name",
    header: "Responsável",
  },
  {
    accessorKey: "task",
    header: "Tarefa",
  },
  {
    accessorKey: "period",
    header: "Período",
  },
  {
    accessorKey: "recurrence",
    header: "Recorrência",
  },
  {
    header: "Deletar",
  },
];

export const tasksFieldsInitialValues = {
    name: "",
    task: "",
    period: "",
    recurrence: "",
};

export const taskFieldsDetails: Record<
  keyof MockTasksFields,
  TaskFieldsInputProps
> = {
  name: {
    title: "Responsável",
    placeholder: "Nome",
    subtitle: "Nome do eesponável pela tarefa",
    icon: (
      <FaUserTie
        color="white"
        className=" w-3 h-3"
      />
    ),

    type: "text",
  },
   task: {
    title: "Tarefa",
    placeholder: "Apagar as luzes do setor",
    subtitle: "Descrição da tarefa",
    icon: (
      <VscLayersActive
        color="white"
        className=" w-3 h-3"
      />
    ),
    type: "text",
  },
   period: {
    title: "Período",
    placeholder: "01/01/2025 à 01/01/2026",
    subtitle: "Período de vigor da tarefa",
    icon: (
      <FaRegCalendarCheck
        color="white"
        className=" w-3 h-3"
      />
    ),

    type: "text",
  },
   recurrence: {
    title: "Recorrência",
    placeholder: "seg e ter",
    subtitle: "Recorrência da atividade",
    icon: (
      <MdOutlineTimeline
        color="white"
        className=" w-3 h-3"
      />
    ),

    type: "text",
  },


};

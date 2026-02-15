import { ColumnDef } from "@tanstack/react-table";
import { FaRegCalendarCheck, FaUserTie } from "react-icons/fa";
import { VscLayersActive } from "react-icons/vsc";
import { MockAtaFields } from "./interface";
import { ataFieldsDetailsProps } from "./interface";
import { GrDocumentDownload } from "react-icons/gr";
import { PiVideoConferenceThin } from "react-icons/pi";
import { BsCalendarDate } from "react-icons/bs";

export const mochAtas: MockAtaFields[] = [
  {
    dtaAta: "25/01",
    refMeeting: "Supervisionar máquina de café (insumos)",
    ata: '',
  },
];

export const ataFieldsInitialValues = {
  dtaAta: "",
  refMeeting: "",
  ata: '',
};

export const ataFieldsDetails: Record<
  keyof typeof ataFieldsInitialValues,
  ataFieldsDetailsProps
> = {
  dtaAta: {
    title: "Data de Ata",
    placeholder: "25/01/2026",
    subtitle: "Data de Postagem da Ata",
    icon: <BsCalendarDate color="white" className=" w-3 h-3" />,

    type: "date", 
  },
  refMeeting: {
    title: "Reunião",
    placeholder: "2º Quinzena de Janeiro",
    subtitle: "Quinzena de referência da Reunião",
    icon: <PiVideoConferenceThin color="white" className=" w-3 h-3" />,
    type: "text",
  },
  ata: {
    title: "Cópia da Ata",
    placeholder: "ata.txt",
    subtitle: "Arquivo .txt com o conteúdo da ATA.",
    icon: <GrDocumentDownload color="white" className=" w-3 h-3" />,
    accept: ".txt",
    type: "file",
  },
};

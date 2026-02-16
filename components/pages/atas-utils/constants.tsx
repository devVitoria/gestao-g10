import { MockAtaFields } from "./interface";
import { AtaInputDetailsProps } from "./interface";
import { GrDocumentDownload } from "react-icons/gr";
import { PiVideoConferenceThin } from "react-icons/pi";
import { BsCalendarDate } from "react-icons/bs";

export const mockAtas: MockAtaFields[] = [
  {
    dtaAta: "25/01",
    refMeeting: "",
    ata: '',
  },
];

export const ataInitialValues = {
  dtaAta: "",
  refMeeting: "",
  ata: '',
};

export const ataFieldsDetails: Record<
  keyof typeof ataInitialValues,
  AtaInputDetailsProps
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

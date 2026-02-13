import { MdTextFields } from "react-icons/md";
import { eventCalendarForm, eventCalendarTypeFields } from "./interface";
import { LuAlarmClock } from "react-icons/lu";
import { GiDuration } from "react-icons/gi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import moment from "moment";

export const eventCalendarFields: Record<eventCalendarTypeFields, string> = {
  title: "",
  start: "",
  hour: "",
  duration: "",
};

export const eventCalendarFieldsDetails: Record<
  eventCalendarTypeFields,
  eventCalendarForm
> = {
  title: {
    title: "Título do evento",
    subtitle: "Insira o título do evento. Exemplo: Reunião mensal",
    placeholder: "Treinamento",
    icon: <MdTextFields color="white" className="opacity-80 w-2.5 h-2.5" />,
    type: "text",
  },
  start: {
    title: "Início do evento",
    subtitle: "Dia e mês",
    placeholder: "DD/MM",
    min:`${moment().year}-01-01`,
    max:`${moment().year}-12-31`,
    icon: (
      <WiDaySunnyOvercast color="white" className="opacity-80 w-2.5 h-2.5" />
    ),
    type: "date",
  },
  hour: {
    title: "Horário",
    subtitle: "Hora e minutagem",
    placeholder: "HH:MM",
    icon: <LuAlarmClock color="white" className="opacity-80 w-2.5 h-2.5" />,
    type: "time",
    maxlenght: 4,
    min:"00:00",
    max:"23:59" 
  },
  duration: {
    title: "Duração do evento",
    subtitle: "Duração em minutos",
    placeholder: "30",
    icon: <GiDuration color="white" className="opacity-80 w-2.5 h-2.5" />,
    type: "number",
    maxlenght: 3,
  },
};

import { eventCalendarTypeFields } from "./interface";

export const eventCalendarFields: Record<eventCalendarTypeFields, string> = {
  title: "",
  start: "",
  hour: "",
  duration: "",
};


export const eventCalendarFieldsDetails: Record<eventCalendarTypeFields, string> = {
  title: 'Título do evento',
  duration: 'Duração do evento',
  start: 'Início do evento',
  hour: "Horário"

} 
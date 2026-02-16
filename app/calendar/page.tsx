"use client";
import MenuAppBar from "@/components/header";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../components/pages/calendar-utils/calendar.css";
import "../../components/pages/calendar-utils/form.css";
import { toast } from "react-hot-toast";

import "moment/locale/pt-br";
import { useState } from "react";
import {
  ConflictDayProps,
  EventListProps,
} from "@/components/pages/calendar-utils/interface";
import {
  eventCalendarFields,
  eventCalendarFieldsInputsDetails,
} from "@/components/pages/calendar-utils/constants";
import { FaTasks } from "react-icons/fa";
import AddBtn from "@/components/add-btn";
import Form from "@/components/form";

moment.locale("pt-br");

export default function CalendarPage() {
  const router = useRouter();
  const [showInputForm, setShowInputForm] = useState<boolean>(false);
  //TODO: mandar do backend depois
  const [myEventsList, setEventsList] = useState<EventListProps[]>([
    {
      title: "Treinamento G-10",
      start: moment("2026-02-10 09:00", "YYYY-MM-DD HH:mm").toDate(),
      end: moment("2026-02-10 10:00", "YYYY-MM-DD HH:mm").toDate(),
    },
    {
      title: "Alinhamento das reuniões",
      start: moment("2026-02-16 14:00", "YYYY-MM-DD HH:mm").toDate(),
      end: moment("2026-02-16 16:00", "YYYY-MM-DD HH:mm").toDate(),
    },
  ]);
  const localizer = momentLocalizer(moment);

  return (
    <div className="flex flex-col items-start w-full bg-black/50">
      <MenuAppBar router={router} menuName={"Calendário de Reuniões"} />
      <div className="flex flex-1 w-full px-10  justify-center items-center gap-5">
        <div className=" bg-gray-600/10 rounded-2xl">
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            views={["month", "agenda"]}
            messages={{
              today: "Hoje",
              previous: "Anterior",
              next: "Próximo",
              month: "Visualizar Mês",
              agenda: "Visualizar Agenda",
              date: "Data",
              time: "Hora",
              event: "Evento",
              noEventsInRange: "Não há eventos neste período",
              showMore: (total) => `+${total} mais`,
            }}
            endAccessor="end"
            defaultDate={new Date()}
            step={60}
            style={{
              height: 450,
              color: "black",
              border: 1,
              borderColor: "red",
            }}
          />
        </div>

        {showInputForm && (
          <Form
            titleIcon={<FaTasks color="white" className="opacity-50" />}
            title="Insira um evento"
            onSubmit={async ({ value }) => {
              const startDate = moment(
                `${value.start} ${value.hour}`,
                "YYYY-MM-DD HH:mm",
              );
              const emptyField =
                value.duration === "" ||
                value.hour === "" ||
                value.start === "" ||
                value.title === "";
              const invalidDate = startDate.isBefore(moment());
              const invalidYear = startDate.isAfter(moment().endOf("year"));
              const hourSplited = value.hour.split(":");
              const validHour =
                Number(hourSplited[0]) >= 7 &&
                Number(hourSplited[0]) <= 19 &&
                Number(hourSplited[1]) >= 0 &&
                Number(hourSplited[0]) <= 59;

              const conflictStart = myEventsList.find((e) => {
                moment(e.start) === startDate;
              });

              const sameDay = myEventsList.filter((e) => {
                moment(e.start).format("YYYY-MM-DD") ===
                  moment(startDate).format("YYYY-MM-DD");
              });
              let conflictDay: ConflictDayProps = {
                has: false,
                title: "",
              };

              if (sameDay.length > 0) {
                for (const day of sameDay) {
                  const isBetweenStart = startDate.isBetween(
                    moment(day.start),
                    moment(day.end),
                  );

                  if (isBetweenStart) {
                    conflictDay = {
                      has: true,
                      title: day.title,
                    };
                  }
                }
              }

              if (emptyField) {
                toast.error(
                  "Todos os campos precisam ser preenchidos para que o evento seja cadastrado",
                );
                return;
              }
              if (!validHour) {
                toast.error(
                  "O horário de início do evento precisa estar dentro do horário comercial! 07h:00 min à 19h:59 min",
                );
                return;
              }
              if (invalidDate) {
                toast.error(
                  "A data de início do evento deve ser superior a data atual!",
                );
                return;
              }

              if (invalidYear) {
                toast.error("A data de início do evento deve ser esse ano!");
                return;
              }

              if (conflictStart) {
                toast.error(
                  `Existe um evento cadastrado com o mesmo início! ${conflictStart.title}`,
                );
                return;
              }

              if (conflictDay.has) {
                toast.error(`A data de início definida conflita com o evento ${conflictDay.title} pois a data do mesmo está
            entre o ínicio e o fim do evento já cadastrado`);
                return;
              }

              const newEvent: EventListProps = {
                title: value.title,
                start: startDate.toDate(),
                end: startDate
                  .clone()
                  .add(Number(value.duration), "minutes")
                  .toDate(),
              };

              setEventsList((prev) => [...prev, newEvent]);
              toast.success("Evento adicionado");
            }}
            onCloseForm={() => {
              setShowInputForm(!showInputForm);
            }}
            defaultValues={eventCalendarFields}
            formInputFields={eventCalendarFieldsInputsDetails}
          />
        )}
        {!showInputForm && (
          <AddBtn setShow={setShowInputForm} show={showInputForm} />
        )}
      </div>
    </div>
  );
}

"use client";
import MenuAppBar from "@/components/header";
import moment, { duration, min } from "moment";
import { useRouter } from "next/navigation";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../components/pages/calendar-utils/calendar.css";
import "moment/locale/pt-br";
import { LuCalendarPlus } from "react-icons/lu";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { eventListProps } from "@/components/pages/calendar-utils/interface";
import {
  eventCalendarFields,
  eventCalendarFieldsDetails,
} from "@/components/pages/calendar-utils/constants";

moment.locale("pt-br");

export default function CalendarPage() {
  const router = useRouter();
  const [showInputForm, setShowInputForm] = useState<boolean>(false);
  //TODO: mandar do backend depois

  const [myEventsList, setEventsList] = useState<eventListProps[]>([
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

  const form = useForm({
    defaultValues: eventCalendarFields,
    onSubmit: async ({ value }) => {
      const newEvent: eventListProps = {
        title: value.title,
        start: moment(
          `${value.start} ${value.hour}`,
          "YYYY-MM-DD HH:mm",
        ).toDate(),
        end: moment(`${value.start} ${value.hour}`, "YYYY-MM-DD HH:mm")
          .add(Number(value.duration), "minutes")
          .toDate(),
      };

      console.log("formato", {title: 'sdasdasd', start: '2026-02-12', hour: '12:20', duration: '30'})
      setEventsList((prev) => [...prev, newEvent]);

      console.log(value);
    },
  });

  const localizer = momentLocalizer(moment);

  const formInputs = () => {
    return (
      <div className="flex flex-col items-center justify-around gap-2 ">
        <p className="text-black/50"> Insira um evento</p>
        {Object.entries(eventCalendarFieldsDetails).map((k) => (
          <form.Field
            name={k[0]}
            validators={{
              onChange: ({ value }) => !value && `${k[1]} é necessário`,
              onChangeAsyncDebounceMs: 500,

              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
            children={(field) => {
              return (
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor={field.name}
                    className="text-gray-600 text-xs font-thin"
                  >
                    {k[1]}
                  </label>
                  <input
                    className="text-black/70 border hover:cursor border-gray-600 p-2 rounded-md  text-xs outline-0"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              );
            }}
          />
        ))}

        <div
          onClick={() => {
            form.handleSubmit();
          }}
          className=" hover:cursor-pointer hover:bg-gray-300 w-full py-1 flex justify-center items-center rounded-lg"
        >
          <p className="text-xs text-black/70 font-bold">ENVIAR</p>
        </div>
      </div>
    );
  };

  const handleInsertNewEvent = () => {
    console.log("Inserir um evento");
  };
  return (
    <div className="flex flex-col items-start w-full bg-black/50">
      <MenuAppBar router={router} menuName={"Calendário de Reuniões"} />
      <div className="flex flex-1 w-full px-10  justify-center items-center gap-5">
        <div className=" bg-gray-600/10 rounded-2xl w-full">
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
          <div
            className="flex-1 flex justify-center items-center"
            style={{
              height: "90vh",
            }}
          >
            <div className="flex p-5 bg-white/90 rounded-2xl justify-center items-center">
              {formInputs()}
            </div>
          </div>
        )}
        {!showInputForm && (
          <div
            onClick={() => {
              setShowInputForm(!showInputForm);
            }}
            className="absolute z-50 right-5 bottom-5 flex flex-row gap-2 items-center p-2 opacity-70 hover:opacity-100 bg-white rounded-2xl hover:cursor-pointer"
          >
            <LuCalendarPlus color={"#000"} className="w-4 h-4" />
            <p className="text-black text-sm font-bold">"Adicionar Evento"</p>
          </div>
        )}
      </div>
    </div>
  );
}

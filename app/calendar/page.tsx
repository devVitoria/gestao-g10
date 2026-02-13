"use client";
import MenuAppBar from "@/components/header";
import moment, { duration, min } from "moment";
import { useRouter } from "next/navigation";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../components/pages/calendar-utils/calendar.css";
import "../../components/pages/calendar-utils/form.css";

import "moment/locale/pt-br";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import {
  eventCalendarTypeFields,
  eventListProps,
} from "@/components/pages/calendar-utils/interface";
import {
  eventCalendarFields,
  eventCalendarFieldsDetails,
} from "@/components/pages/calendar-utils/constants";
import { IoIosAddCircle } from "react-icons/io";
import { FaTasks } from "react-icons/fa";

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
      const startDate = moment(
        `${value.start} ${value.hour}`,
        "YYYY-MM-DD HH:mm",
      );

      const newEvent: eventListProps = {
        title: value.title,
        start: startDate.toDate(),
        end: startDate.clone().add(Number(value.duration), "minutes").toDate(),
      };

      setEventsList((prev) => [...prev, newEvent]);
      form.reset();
    },
  });

  const localizer = momentLocalizer(moment);

  const formInputs = () => {
    return (
      <div className="flex flex-col items-center gap-2 ">
        <div className="flex flex-row items-center gap-2 border-b border-white/50 pb-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex justify-center items-center">
            <FaTasks color="white" className="opacity-50" />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-white/50 font-bold text-sm"> Insira um evento</p>
            <p className="text-white/50 text-[9px]">
              Preencha os campos abaixo
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 py-2">
          {Object.entries(eventCalendarFieldsDetails).map((k, idx) => (
            <form.Field
              name={k[0] as eventCalendarTypeFields}
              validators={{
                onChange: ({ value }) => !value && `${k[1]} é necessário`,
                onChangeAsyncDebounceMs: 500,

                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return (
                    value.includes("error") &&
                    'No "error" allowed in first name'
                  );
                },
              }}
              children={(field) => {
                return (
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center">
                        <div className=" bg-white/20 w-3 h-3 rounded-full flex justify-center items-center">
                          {k[1].icon}
                        </div>
                        <label
                          htmlFor={field.name}
                          className="text-white/50 font-bold text-[11px]"
                        >
                          {k[1].title}
                        </label>
                      </div>

                      <p className="text-white/60 text-[9px]">
                        {k[1].subtitle}.
                      </p>
                    </div>
                    <input
                      className="text-white/70 border hover:cursor border-white/50 px-2 py-1 rounded-md  text-xs outline-0"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      placeholder={k[1].placeholder}
                      min={k[1].min}
                      max={k[1].max}
                      type={k[1].type}
                      maxLength={k[1].maxlenght ?? undefined}
                      onBlur={field.handleBlur}
                      style={{
                        MozAppearance: "textfield",
                      }}
                      onChange={(e) => {
                        const value =
                          k[0] === "duration"
                            ? e.target.value.slice(0, 3)
                            : e.target.value;
                        field.handleChange(value);
                      }}
                    />
                  </div>
                );
              }}
            />
          ))}
        </div>
        <div
          onClick={() => {
            form.handleSubmit();
          }}
          className=" hover:cursor-pointer w-full py-1 flex justify-center items-center rounded-lg"
        >
          <p className="text-xs text-white/70 font-bold">ENVIAR</p>
        </div>
      </div>
    );
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
            className="flex-1 flex justify-center items-center border border-white/10 bg-white/5  rounded-2xl"
            style={{
              height: "90vh",
            }}
          >
            <div className="flex p-5  justify-center items-center">
              {formInputs()}
            </div>
          </div>
        )}
        {!showInputForm && (
          <div
            onClick={() => {
              setShowInputForm(!showInputForm);
            }}
            className="absolute right-5 bottom-5 flex flex-row gap-2 items-center p-2 opacity-70 hover:opacity-100 bg-white rounded-2xl hover:cursor-pointer"
          >
            <IoIosAddCircle color={"#000"} className="w-4 h-4" />

            <p className="text-black text-sm font-bold">Adicionar Evento</p>
          </div>
        )}
      </div>
    </div>
  );
}

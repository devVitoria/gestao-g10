"use client";
import MenuAppBar from "@/components/header";
import moment, { duration } from "moment";
import { useRouter } from "next/navigation";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../components/pages/calendar-utils/calendar.css";
import "moment/locale/pt-br";
import { LuCalendarPlus } from "react-icons/lu";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";

moment.locale("pt-br");
interface eventListProps {
  title: string;
  start: Date;
  end: Date;
}
export default function CalendarPage() {
  const router = useRouter();
  const [showInputForm, setShowInputForm] = useState<boolean>(false);

  //TODO: mandar do backend depois
  const myEventsList: eventListProps[] = [
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

    {
      title: "teste",
      start: new Date(),
      end: new Date(),
    },
  ];
  const form = useForm({
    defaultValues: {
      title: "",
      start: "",
      end: "",
      hour: "",
      duration: "",
    },
    onSubmit: async ({ value }) => {
      console.log("VAKUEE", value);
      const newEvent: eventListProps = {
        title: value.title,
        start: moment("2026-02-08 14:00", "YYYY-MM-DD HH:mm").toDate(),
        end: moment("2026-02-08 16:00", "YYYY-MM-DD HH:mm").toDate(),
      };


      myEventsList.push(newEvent);

      console.log(value);
    },
  });

  const localizer = momentLocalizer(moment);

  const formInputs = () => {
    return (
      <div className="flex flex-col items-center justify-around gap-2">
        <form.Field
          name="title"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Um Título para o evento é necessário"
                : value.length < 3
                  ? "O Título deve ter no mínimo 3 caracteres."
                  : undefined,
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
                  Título do evento
                </label>
                <input
                  className="text-black/70 border border-gray-600 p-2 rounded-md  text-xs"
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

        <form.Field
          name="start"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Um Título para o evento é necessário"
                : value.length < 3
                  ? "O Título deve ter no mínimo 3 caracteres."
                  : undefined,
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
                  Início do evento
                </label>
                <input
                  className="text-black/70 border border-gray-600 p-2 rounded-md  text-xs"
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

        <form.Field
          name="start"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Um Título para o evento é necessário"
                : value.length < 3
                  ? "O Título deve ter no mínimo 3 caracteres."
                  : undefined,
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
                  Horário de início do evento
                </label>
                <input
                  className="text-black/70 border border-gray-600 p-2 rounded-md  text-xs"
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

        <form.Field
          name="end"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Um Título para o evento é necessário"
                : value.length < 3
                  ? "O Título deve ter no mínimo 3 caracteres."
                  : undefined,
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
                  Fim do evento
                </label>
                <input
                  className="text-black/70 border border-gray-600 p-2 rounded-md  text-xs"
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

        <form.Field
          name="hour"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Um Título para o evento é necessário"
                : value.length < 3
                  ? "O Título deve ter no mínimo 3 caracteres."
                  : undefined,
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
                  Hora do evento
                </label>
                <input
                  className="text-black/70 border border-gray-600 p-2 rounded-md  text-xs"
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

        <div
          onClick={() => {
            form.handleSubmit();
          }}
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
      <div className="flex flex-1 w-full px-10  justify-center items-center">
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

"use client";
import MenuAppBar from "@/components/header";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../components/pages/calendar-utils/calendar.css";
import "moment/locale/pt-br";
import { LuCalendarPlus } from "react-icons/lu";

moment.locale("pt-br");
export default function CalendarPage() {
  const router = useRouter();

  const localizer = momentLocalizer(moment);

  //TODO: mandar do back end depoiiis
  const myEventsList = [
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

  const handleInsertNewEvent = () => {
    console.log("Inserir um evento");
  };
  return (
    <div className="flex flex-col items-start w-full bg-black/50">
      <MenuAppBar router={router} menuName={"Calendário de Reuniões"} />
      <div className="flex flex-1 w-full px-10 mt-12  justify-center items-center">
        <div className=" bg-gray-600/10 rounded-2xl w-full ">
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

        <div
          onClick={() => {
            handleInsertNewEvent;
          }}
          className="absolute right-5 bottom-5 flex flex-row gap-2 items-center p-2 bg-white rounded-2xl hover:cursor-pointer"
        >
          <LuCalendarPlus color={'#101828'} className="w-4 h-4" />
          <p className="text-gray-900 text-sm ">Adicionar Evento</p>
        </div>
      </div>
    </div>
  );
}

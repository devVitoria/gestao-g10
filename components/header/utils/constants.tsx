import {
  IoCalendarNumberSharp,
  IoDocumentText,
  IoPeopleSharp,
} from "react-icons/io5";
import { OptionMenuProps } from "./interface";
import { FaTasks } from "react-icons/fa";

export const menuOptions: OptionMenuProps[] = [
  {
    title: "Calendário de Reuniões",
    icon: <IoCalendarNumberSharp color="#9A9A9A" className="w-3 h-3" />,
    path: "/calendar",
  },

  {
    title: "Gestão de Atas",
    icon: <IoDocumentText color="#9A9A9A" className="w-3 h-3" />,
    path: "/atas",
  },
  {
    title: "Organização de funções",
    icon: <FaTasks color="#9A9A9A" className="w-3 h-3" />,
    path: "/tasks",
  },

  {
    title: "Integrantes",
    icon: <IoPeopleSharp color="#9A9A9A" className="w-3 h-3" />,
    path: "/members",
  },
];

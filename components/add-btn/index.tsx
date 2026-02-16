import { MdAdd } from "react-icons/md";
import { AddBtnProps } from "./utils/interface";

export default function AddBtn({setShow, show}: AddBtnProps) {
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      className="absolute right-5 bottom-5 items-center justify-center flex flex-row gap-2  w-8 h-8 opacity-70 hover:opacity-100 bg-white rounded-full hover:cursor-pointer"
    >
      <MdAdd color="black" size={24} />
    </div>
  );
}

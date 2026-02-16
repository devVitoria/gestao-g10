import { SetStateAction } from "react";

export interface AddBtnProps {
    setShow: (value: SetStateAction<boolean>) => void
    show: boolean
}
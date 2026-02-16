"use client";
import MenuAppBar from "@/components/header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ataFieldsDetails,
  ataInitialValues,
} from "../../components/pages/atas-utils/constants";
import { IoDocumentText } from "react-icons/io5";
import AddBtn from "@/components/add-btn";
import Form from "@/components/form";

export default function Atas() {
  const router = useRouter();
  const [showAtaUploader, setShowAtaUploader] = useState(false);

  return (
    <div className="flex flex-col items-start w-full bg-black/50">
      <MenuAppBar router={router} menuName={"Gestão de Atas"} />

      {showAtaUploader && (
        <Form
          titleIcon={
            <IoDocumentText color="white" className="opacity-50 w-4 h-4" />
          }
          title="Insira um novo registro de ATA"
          onSubmit={async ({ value }) => {
            // TODO fazer a extração do texto do TXT pra salvar no banco
            console.log("Chamar a API pra inserir", value);
          }}
          onCloseForm={() => {
            setShowAtaUploader(!showAtaUploader);
          }}
          defaultValues={ataInitialValues}
          formInputFields={ataFieldsDetails}
        />
      )}

      {!showAtaUploader && (
        <AddBtn setShow={setShowAtaUploader} show={showAtaUploader} />
      )}
    </div>
  );
}

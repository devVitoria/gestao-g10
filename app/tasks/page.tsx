"use client";
import MenuAppBar from "@/components/header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  columns,
  mockTask,
  taskFieldsDetails,
  tasksFieldsInitialValues,
} from "@/components/pages/tasks-utils/constants";
import { BsFillTrash3Fill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import AddBtn from "@/components/add-btn";
import Form from "@/components/form";
import Table from "@/components/table";
import { MockTasksFields } from "@/components/pages/tasks-utils/interface";

export default function Tasks() {
  const router = useRouter();
  const [showTasksForm, setShowTasksForm] = useState(false);

  return (
    <div
      className="flex-1 flex-col items-start w-full bg-black/50"
      style={{
        height: "100vh",
      }}
    >
      <MenuAppBar router={router} menuName={"Organização de Funções"} />
      <div
        className="flex-1 flex justify-start items-start p-10"
        style={{
          height: "90vh",
        }}
      >
        <Table
          actionIcon={
            <BsFillTrash3Fill className="hover:text-white hover:text-lg transition-all hover:cursor-pointer" />
          }
          columns={columns}
          data={mockTask}
          execAction={(data: MockTasksFields) => {
            console.log("Excluir tarefa", data);
          }}
        />

        {showTasksForm && (
          <Form
            titleIcon={
              <GoTasklist color="white" className="opacity-50 w-4 h-4" />
            }
            title="Insira uma nova tarefa"
            onSubmit={async ({ value }) => {
              console.log("Chamar a API pra inserir", value);
            }}
            onCloseForm={() => {
              setShowTasksForm(!showTasksForm);
            }}
            defaultValues={tasksFieldsInitialValues}
            formInputFields={taskFieldsDetails}
          />
        )}

        {!showTasksForm && (
          <AddBtn setShow={setShowTasksForm} show={showTasksForm} />
        )}
      </div>
    </div>
  );
}

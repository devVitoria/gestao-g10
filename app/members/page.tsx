"use client";
import MenuAppBar from "@/components/header";
import { useRouter } from "next/navigation";
import {
  columns,
  memberFieldsInputDetails,
  membersFields,
  mockUserInfo,
} from "@/components/pages/members-utils/constants";
import { RiBookmark2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import AddBtn from "@/components/add-btn";
import Form from "@/components/form";
import Table from "@/components/table";
import { MockUserInfoType } from "@/components/pages/members-utils/interface";

export default function Members() {
  const router = useRouter();
  const [showMembersForm, setShowMembersForm] = useState(false);

  return (
    <div
      className="flex-1 flex-col items-start w-full bg-black/50"
      style={{
        height: "100vh",
      }}
    >
      <MenuAppBar router={router} menuName={"Integrantes"} />
      <div
        className="flex-1 flex justify-start items-start p-10"
        style={{
          height: "90vh",
        }}
      >
        <Table
          actionIcon={
            <RiBookmark2Fill className="hover:text-white hover:text-lg transition-all hover:cursor-pointer" />
          }
          columns={columns}
          data={mockUserInfo}
          execAction={(data: MockUserInfoType) => {
            console.log("Inativar membro", data)
          }}
        />

        {showMembersForm && (
          <Form
            titleIcon={<FaUsers color="white" className="opacity-50 w-4 h-4" />}
            title="Insira um novo membro"
            onSubmit={async ({ value }) => {
              console.log("Chamar a API pra inserir", value);
            }}
            onCloseForm={() => {
              setShowMembersForm(!showMembersForm);
            }}
            defaultValues={membersFields}
            formInputFields={memberFieldsInputDetails}
          />
        )}

        {!showMembersForm && (
          <AddBtn setShow={setShowMembersForm} show={showMembersForm} />
        )}
      </div>
    </div>
  );
}

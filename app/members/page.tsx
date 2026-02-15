"use client";
import MenuAppBar from "@/components/header";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import {
  columns,
  memberFieldsDetails,
  membersFields,
  mockUserInfo,
  renderIndicator,
} from "@/components/pages/members-utils/constants";
import { RiBookmark2Fill } from "react-icons/ri";
import { useForm } from "@tanstack/react-form";
import { FaUsers } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

export default function Members() {
  const router = useRouter();
  const [showMembersForm, setShowMembersForm] = useState(false);

  const table = useReactTable({
    columns,
    data: mockUserInfo ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  const form = useForm({
    defaultValues: membersFields,
    onSubmit: (value) => {
      console.log("Chamar a API pra inserir", value);
    },
  });

  const formInputs = () => {
    return (
      <div className="flex-1  flex-col items-center gap-2 ">
        <div className="flex flex-row w-full items-center gap-2 border-b border-white/50 pb-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex justify-center items-center">
            <FaUsers color="white" className="opacity-50 w-4 h-4" />
          </div>

          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col justify-start items-start">
              <p className="text-white/50 font-bold text-sm">
                Insira um novo membro
              </p>
              <p className="text-white/50 text-[9px]">
                Preencha os campos abaixo
              </p>
            </div>

            <div
              onClick={() => {
                setShowMembersForm(false);
              }}
              className=" hover:cursor-pointer"
            >
              <IoClose className="opacity-70" />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-black z-50 justify-around flex flex-row gap-4 py-2 w-full">
          {Object.entries(memberFieldsDetails).map((k, idx) => (
            <form.Field
              name={k[0] as keyof typeof membersFields}
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
                        {k[1].subtitle}
                      </p>
                    </div>
                    <input
                      className="text-white/70 border hover:cursor border-white/50 px-2 py-1 rounded-md  text-xs outline-0"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      placeholder={k[1].placeholder}
                      type={k[1].type}
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
          className=" hover:cursor-pointer w-full flex justify-center items-center rounded-lg"
        >
          <p className="text-xs text-white/70 font-bold">ENVIAR</p>
        </div>
      </div>
    );
  };

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
        <table className="flex-1 border-separate border-spacing-0 rounded-2xl  bg-white/5  max-h-11/12">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-black/60 px-4 py-2 text-center  text-white/70 font-bold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50/5">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-black/40 px-4 py-2 text-center text-white/50 font-bold "
                  >
                    {cell.getValue() !== undefined ? (
                      (renderIndicator(String(cell.getValue()) ?? "") ??
                      String(cell.getValue()))
                    ) : (
                      <div
                        onClick={() => {
                          console.log(
                            "Chamar api pra desativar user",
                            mockUserInfo[row.index].name,
                          );
                        }}
                        className="flex w-full items-center justify-center"
                      >
                        <RiBookmark2Fill className="hover:text-white hover:text-lg transition-all hover:cursor-pointer" />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {showMembersForm && (
          <div className="flex absolute max-h-1/2 w-full bottom-0 left-0  justify-center items-center border-t p-5 rounded-t-2xl">
            {formInputs()}
          </div>
        )}

        {!showMembersForm && (
          <div
            onClick={() => {
              setShowMembersForm(!showMembersForm);
            }}
            className="absolute right-5 bottom-5 items-center justify-center flex flex-row gap-2  w-8 h-8 opacity-70 hover:opacity-100 bg-white rounded-full hover:cursor-pointer"
          >
            <MdAdd color="black" size={24} />
          </div>
        )}
      </div>
    </div>
  );
}

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
  mockUserInfo,
} from "@/components/pages/members-utils/constants";

export default function Members() {
  const router = useRouter();

  const table = useReactTable({
    columns,
    data: mockUserInfo ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  const renderIndicator = (ind: string) => {
    const isBool = ind === "true" || ind === "false";
    if (!isBool) {
      return null;
    }

    if (ind === "true") {
      return (
        <div className="flex w-full items-center justify-center">
          <div className="w-16 h-6 border border-green-800 rounded-2xl flex justify-center items-center">
            <p className="text-green-600/50 font-bold">Sim</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex w-full items-center justify-center">
        <div className="w-16 h-6 border border-red-800 rounded-2xl flex justify-center items-center">
          <p className="text-red-600/50 font-bold">Não</p>
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
        className="flex-1 flex justify-center items-center px-10"
        style={{
          height: "90vh",
        }}
      >
        <table className="border-separate border-spacing-0 rounded-2xl min-w-11/12 bg-white/5  max-h-11/12">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border border-black/40 px-4 py-2 text-center  text-white/70 font-bold">
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
                    className="border border-black/40 px-4 py-2 text-center text-white/50 font-bold"
                  >
                    {renderIndicator(String(cell.getValue()) ?? "") ??
                      String(cell.getValue())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

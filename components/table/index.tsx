import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableProps } from "./utils/interface";
import { renderIndicator } from "./utils/constants";

export default function Table<T extends object>({ columns, actionIcon, data, execAction }: TableProps<T>) {
 
    const table = useReactTable({
    columns,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
                    onClick={() => execAction(data[row.index])}
                    className="flex w-full items-center justify-center"
                  >
                    {actionIcon}{" "}
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

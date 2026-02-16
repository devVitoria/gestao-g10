import { ColumnDef } from "@tanstack/react-table";

export interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  actionIcon: React.ReactNode;
  execAction: (data: T) => void
}

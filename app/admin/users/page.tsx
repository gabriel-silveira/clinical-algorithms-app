import {Metadata} from "next";
import DynamicTable from "@/app/ui/tables/dynamic-table/dynamic-table";
import {columns, rows} from "@/app/lib/data/users-table-data";

export const metadata: Metadata = {
  title: 'Usuários',
};

export default function UserPage() {
  return (
    <div className="p-8">
      <h1>Usuários</h1>

      <DynamicTable
        columns={columns}
        data={rows}
      />
    </div>
  )
}

import {Metadata} from "next";
import DynamicTable from "@/app/ui/tables/dynamic-table/dynamic-table";
import {getUsers} from "@/app/lib/actions/users-actions";
import {columns} from "@/app/lib/data/users-table-data";

export const metadata: Metadata = {
  title: 'Usuários',
};

export default async function UserPage() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1>Usuários</h1>

      {!users || !users.length ? (
        <div>Nenhum usuário encontrado.</div>
      ) : (
        <DynamicTable
          columns={columns}
          data={users}
        />
      )}
    </div>
  )
}

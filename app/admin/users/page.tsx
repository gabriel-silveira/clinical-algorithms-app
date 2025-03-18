import {Metadata} from "next";
import {Suspense} from "react";

import UsersTable from "@/app/ui/tables/users-table";
import {getUsers} from "@/app/lib/actions/users-actions";

export const metadata: Metadata = {
  title: 'Usuários',
};

export default async function UserPage() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1>Usuários</h1>

      <Suspense>
        <UsersTable users={users} />
      </Suspense>
    </div>
  )
}

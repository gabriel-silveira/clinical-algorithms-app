import {Suspense} from "react";

import DynamicTable from "@/app/ui/tables/dynamic-table/dynamic-table";
import Pagination from "@/app/ui/paginations/pagination";
import {getUsers} from "@/app/lib/actions/users-actions";
import {usersTableColumns} from "@/app/lib/data/users-table-data";

export default async function UsersTable(
  {query, currentPage, totalPages}: { query: string; currentPage: number; totalPages: number },
) {
  const users = await getUsers(query, currentPage);

  function editUser(user: object) {
    console.log('User:', user);
  }

  return (
    <>
      <Suspense>
        <DynamicTable
          columns={usersTableColumns}
          data={users}
        />
      </Suspense>

      <div className="py-5 flex items-center justify-center">
        <Pagination
          totalPages={totalPages}
        />
      </div>
    </>
  )
}

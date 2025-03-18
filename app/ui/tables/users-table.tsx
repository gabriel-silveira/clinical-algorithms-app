'use client';

import DynamicTable from "@/app/ui/tables/dynamic-table/dynamic-table";
import {usersTableColumns} from "@/app/lib/data/users-table-data";
import {IDynamicTableDataProp} from "@/app/ui/tables/dynamic-table/definitions";

export default function UsersTable(props: { users: IDynamicTableDataProp[] }) {
  function editUser(user: object) {
    console.log('User:', user);
  }

  return (
    <DynamicTable
      columns={usersTableColumns}
      data={props.users}
      onClick={editUser}
    />
  )
}

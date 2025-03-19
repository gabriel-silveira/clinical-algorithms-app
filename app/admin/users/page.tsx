import {Metadata} from "next";

import UsersTable from "@/app/ui/tables/users-table";
import {IUserSearchParams} from "@/app/lib/definitions/user-definitions";

export const metadata: Metadata = {
  title: 'Usuários',
};

export default async function UserPage(props: IUserSearchParams) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || '';

  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = 3;

  return (
    <div className="p-8">
      <h1>Usuários</h1>

      <UsersTable
        query={query}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

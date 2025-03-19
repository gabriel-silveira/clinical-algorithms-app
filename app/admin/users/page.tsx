import {Metadata} from "next";
import Link from "next/link";

import UsersTable from "@/app/ui/tables/users-table";
import SimpleButton from "@/app/ui/buttons/simple-button";
import {IUserSearchParams} from "@/app/lib/definitions/user-definitions";
import Toaster from "@/app/ui/toasters/toaster";

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
      <h1 className="mt-1">Usuários</h1>

      <div className="absolute top-8 right-8">
        <Link href="/admin/users/create">
          <SimpleButton
            label="Criar usuário"
            color="secondary"
          />
        </Link>
      </div>

      <div className="mt-4">
        <UsersTable
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>

      {searchParams?.success === 'create' ? (
        <Toaster message="Usuário criado com sucesso!"/>
      ) : searchParams?.success === 'update' ? <Toaster message="Usuário atualizado com sucesso!"/> : null}
    </div>
  )
}

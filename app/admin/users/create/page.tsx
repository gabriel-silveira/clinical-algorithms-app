import CreateUserForm from "@/app/ui/forms/users/create-user-form";

export default function CreateUserPage() {
  return (
    <div className="p-8">
      <h1 className="mt-1">Criar usuário</h1>

      <CreateUserForm/>
    </div>
  )
}

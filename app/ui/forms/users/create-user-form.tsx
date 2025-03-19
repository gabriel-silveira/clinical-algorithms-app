"use client";

import {useState} from "react";
import {useActionState} from "react";
import {createUser} from "@/app/lib/actions/users-actions";
import {validEmail} from "@/app/lib/validations";
import SimpleButton from "@/app/ui/buttons/simple-button";

export default function CreateUserForm() {
  const [state, formAction] = useActionState(createUser, {errors: null, success: false});

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    maintainer: false,
    master: false,
  });

  // client side validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name) errors.name = "O nome é obrigatório.";
    if (!formData.phone) errors.phone = "O telefone é obrigatório.";
    if (!formData.email.includes("@")) errors.email = "E-mail inválido.";
    if (!formData.password || formData.password.length < 6) errors.password = "A senha deve ter pelo menos 6 caracteres.";

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // dynamically validate fields
  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "name" && !value) error = "O nome é obrigatório.";
    if (name === "phone" && !value) error = "O telefone é obrigatório.";

    if (name === "email") {
      if (!value) error = "O e-mail é obrigatório.";
      else if (!validEmail(value)) error = "E-mail inválido.";
    }

    if (name === "password") {
      if (!value) error = "A senha é obrigatória.";
      else if (value.length < 6) error = "A senha deve ter pelo menos 6 caracteres.";
    }

    setFormErrors((prevErrors) => ({...prevErrors, [name]: error}));
  };

  // update form values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;

    setFormData((prev) => ({...prev, [name]: type === "checkbox" ? checked : value}));

    validateField(name, type === "checkbox" ? (checked ? "true" : "false") : value);
  };

  // intercept form submission in order to validate it
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) e.preventDefault();
  };

  return (
    <div className="bg-white p-7 rounded-xl">
      <form
        className="space-y-4"
        action={formAction}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* name */}
          <div>
            <label className="block">Nome:</label>
            <input
              value={formData.name}
              type="text"
              name="name"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
            />
            {formErrors.name && <div className="text-red-500 text-sm mt-1">{formErrors.name}</div>}
          </div>

          {/* phone */}
          <div>
            <label className="block">Telefone:</label>
            <input
              value={formData.phone}
              type="text"
              name="phone"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
            />
            {formErrors.phone && <div className="text-red-500 text-sm mt-1">{formErrors.phone}</div>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* e-mail */}
          <div>
            <label className="block">E-mail:</label>
            <input
              value={formData.email}
              type="email"
              name="email"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
            />
            {formErrors.email && <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>}
          </div>

          {/* password */}
          <div>
            <label className="block">Senha:</label>
            <input
              value={formData.password}
              type="password"
              name="password"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
            />
            {formErrors.password && <div className="text-red-500 text-sm mt-1">{formErrors.password}</div>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* checkbox editor */}
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                checked={formData.maintainer}
                type="checkbox"
                name="maintainer"
                className="mr-2"
                onChange={handleChange}
              />

              <div>Pode <b>editar</b> algortimos?</div>
            </label>
          </div>

          {/* checkbox master */}
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                checked={formData.master}
                type="checkbox"
                name="master"
                className="mr-2"
                onChange={handleChange}
              />

              <div>É um usuário de nível <b>"Master"</b>?</div>
            </label>
          </div>
        </div>

        <div className="mt-8 text-right">
          <SimpleButton
            label="Criar usuário"
            color="secondary"
          />
        </div>

        {state.success && <p className="text-green-500 text-center mt-4">Usuário criado com sucesso!</p>}
      </form>
    </div>
  );
}

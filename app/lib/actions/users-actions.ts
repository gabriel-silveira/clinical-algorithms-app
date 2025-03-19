"use server";

import bcrypt from 'bcrypt';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import prisma from '@/app/lib/prisma';

export async function getUsers(keyword: string, currentPage: number) {
  try {
    if (keyword) {
      return await prisma.user.findMany({orderBy: [{name: 'asc'}]});
    }

    return await prisma.user.findMany({
      orderBy: [{name: 'asc'}],
      where: {
        OR: [
          {name: {contains: keyword}},
          {email: {contains: keyword}}
        ]
      },
    });
  } catch (error) {
    console.error(error);

    return Promise.reject(error);
  }
}

export async function createUser(prevState: object, formData: FormData) {
  const name = formData.get("name")?.toString().trim() || '';
  const phone = formData.get("phone")?.toString().trim() || '';
  const email = formData.get("email")?.toString().trim() || '';
  const password = formData.get("password")?.toString() || '';
  const maintainer = formData.get("maintainer") === "on";
  const master = formData.get("master") === "on";

  const errors: Record<string, string> = {};

  // server side validation
  if (!name) errors.name = "O nome é obrigatório.";
  if (!phone) errors.phone = "O telefone é obrigatório.";
  if (!email || !email.includes("@")) errors.email = "E-mail inválido.";
  if (!password || password.length < 6) errors.password = "A senha deve ter pelo menos 6 caracteres.";

  if (Object.keys(errors).length > 0) return {errors, success: false};

  try {
    await prisma.user.create({
      data: {name, phone, email, password: await bcrypt.hash(password, 10), maintainer, master},
    });
  } catch (error) {
    console.error(error);

    return {errors: {email: "E-mail já cadastrado."}, success: false};
  }

  redirectToUsersPage('success=create');

  return {errors: null, success: true};
}

function redirectToUsersPage(query?: string) {
  revalidatePath('/admin/users');
  redirect(`/admin/users?${query || ''}`);
}

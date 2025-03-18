'use server';

import prisma from '@/app/lib/prisma'

export async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

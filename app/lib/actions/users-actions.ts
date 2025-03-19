'use server';

import prisma from '@/app/lib/prisma';

export async function getUsers(
  keyword: string,
  currentPage: number,
) {
  try {
    const query = keyword ? {
      where: {
        name: { contains: keyword },
        email: { contains: keyword }
      }
    } : undefined;

    return await prisma.user.findMany(query);
  } catch (error) {
    console.error(error);

    return Promise.reject(error);
  }
}

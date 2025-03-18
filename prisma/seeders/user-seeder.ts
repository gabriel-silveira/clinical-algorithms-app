import {Prisma} from "@prisma/client";

export const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Gabriel Silveira',
    email: 'gabriel@gabrielsilveira.com.br',
    password: 'gabriel',
    phone: '+55 11 976768736',
    maintainer: true,
    master: false,
  },
  {
    name: 'Roberto Rizzo',
    email: 'roberto@verx.com.br',
    password: 'roberto',
    phone: '+55 11 999175174',
    maintainer: true,
    master: true,
  }
];

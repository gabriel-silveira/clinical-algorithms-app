import {PrismaClient} from '@prisma/client'
import {userData} from "@/prisma/seeders/user-seeder";

const prisma = new PrismaClient()

export async function main() {
  for (const u of userData) {
    await prisma.user.create({data: u})
  }
}

void main()

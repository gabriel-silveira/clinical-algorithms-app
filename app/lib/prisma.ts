import {PrismaClient} from '@prisma/client'

export default new PrismaClient()

/* const globalForPrisma = global as unknown as { prisma: typeof prisma }

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
*/

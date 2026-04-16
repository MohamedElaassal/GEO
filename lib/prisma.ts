// lib/prisma.ts
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Allow build-time route analysis to proceed even when env vars are not injected yet.
const databaseUrl = process.env.DATABASE_URL ?? 'file:./dev.db'

const adapter = new PrismaBetterSqlite3({ url: databaseUrl })

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
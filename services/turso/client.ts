'use server'
import { createClient } from '@libsql/client'

export const client = createClient({
  url: 'libsql://chatbot-support-management-kikedealba.turso.io',
  authToken: process.env.NEXT_PUBLIC_DB_TOKEN
})

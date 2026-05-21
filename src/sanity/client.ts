import { createClient } from '@sanity/client'

export const client = createClient({
  projectId : "uymxqulu",
  dataset : "production",
  apiVersion : "2026-05-20",
  useCdn: true,
})
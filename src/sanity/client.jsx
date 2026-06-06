import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId : "uymxqulu",
  dataset : "production",
  apiVersion : "2026-05-20",
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export const urlFor = (source) => {
  if (!source?.asset?._ref) return null
  return builder.image(source).url()
}
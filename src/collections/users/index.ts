import type { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  slug: 'users',
}

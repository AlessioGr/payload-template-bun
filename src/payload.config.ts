import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'

import { Users } from './collections/users'

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
    user: Users.slug,
  },
  collections: [Users],
  db: mongooseAdapter({
    autoPluralization: false,
    transactionOptions: false,
    url: process.env.DATABASE_URI,
  }),
  editor: lexicalEditor({}),
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  serverURL: process.env.PAYLOAD_PUBLIC_URL,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})

import express from 'express'
import payload from 'payload'

import config from './payload.config'

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    config: Promise.resolve(config),
    express: app,
    onInit: (payload) => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
    secret: process.env.PAYLOAD_SECRET,
  })

  // Add your own express routes here

  app.listen(process.env.PORT)
}

void start()

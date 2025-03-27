
import { defineConfig } from "@medusajs/medusa"

export default defineConfig({
  projectConfig: {
    // Add your database, redis, etc. config here
  },
  plugins: [],
  modules: [
    {
      resolve: "./src/modules/custom-smtp-provider",
      options: {
        fromEmail: process.env.SMTP_FROM_EMAIL,
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    },
    {
      resolve: "./src/modules/custom-email-api",
      options: {},
    },
  ],
})

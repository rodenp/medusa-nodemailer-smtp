import { ModulesDefinition } from "@medusajs/modules-sdk"
import { CustomSmtpService } from "./services/custom-smtp"
import { Router } from "express"
import { POST } from "./api/routes/store/custom-email"

const serviceKey = "custom-smtp-provider"

const routes = (router: Router) => {
  router.post("/custom-email", POST)
}

const moduleDefinition: ModulesDefinition = {
  serviceKey,
  service: CustomSmtpService,
  loaders: [
    {
      service: serviceKey,
      loader: (container: any, config: any) => {
        const smtpService = new CustomSmtpService(config)
        container.register(serviceKey, smtpService)
      },
    },
  ],
  api: {
    store: routes,
  },
}

export default moduleDefinition
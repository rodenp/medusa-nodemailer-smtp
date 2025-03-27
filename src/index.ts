import { LoaderDefinition, ModuleDefinition } from "@medusajs/modules-sdk"
import { CustomSmtpService } from "./services/custom-smtp"
import { Router } from "express"
import { POST } from "./api/routes/store/custom-email"

const serviceKey = "custom-smtp-provider"

export const loaders: LoaderDefinition[] = [
  {
    service: serviceKey,
    loader: (container, config) => {
      const smtpService = new CustomSmtpService(config)
      container.register(serviceKey, smtpService)
    },
  },
]

const routes = (router: Router) => {
  router.post("/custom-email", POST)
}

const moduleDefinition: ModuleDefinition = {
  serviceKey,
  service: CustomSmtpService,
  loaders,
  api: {
    store: routes,
  },
}

export default moduleDefinition
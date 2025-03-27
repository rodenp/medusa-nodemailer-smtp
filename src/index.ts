import { Router } from "express"
import { CustomSmtpService } from "./services/custom-smtp"
import { POST } from "./api/routes/store/custom-email"

const routes = (router: Router) => {
  router.post("/custom-email", POST)
}

export default {
  service: CustomSmtpService,
  loaders: [
    {
      service: "custom-smtp-provider",
      loader: (container: any, config: any) => {
        const smtpService = new CustomSmtpService(config)
        container.register("custom-smtp-provider", smtpService)
      },
    },
  ],
  api: {
    store: routes,
  },
}

import { ModuleExports } from "@medusajs/types"

const module: ModuleExports = {
  api: {
    store: {
      routes: [
        {
          method: "POST",
          path: "/custom-email",
          handler: __dirname + "/api/routes/store/custom-email.ts",
        },
      ],
    },
  },
}

export default module

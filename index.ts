
import { ModuleRegistrationName, MedusaModule } from "@medusajs/modules-sdk";
import { ModuleExports } from "@medusajs/types";

export const serviceName = "custom-email-api";

const moduleDefinition: ModuleExports = {
  serviceName,
  api: {
    routes: [
      {
        method: "POST",
        path: "/store/custom-email",
        handler: __dirname + "/api/routes/store/custom-email.ts",
      },
    ],
  },
};

export default MedusaModule.bootstrap(moduleDefinition);

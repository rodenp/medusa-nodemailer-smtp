"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceName = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
exports.serviceName = "custom-email-api";
const moduleDefinition = {
    serviceName: exports.serviceName,
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
exports.default = modules_sdk_1.MedusaModule.bootstrap(moduleDefinition);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_smtp_1 = require("./services/custom-smtp");
const custom_email_1 = require("./api/routes/store/custom-email");
const routes = (router) => {
    router.post("/custom-email", custom_email_1.POST);
};
exports.default = {
    service: custom_smtp_1.CustomSmtpService,
    loaders: [
        {
            service: "custom-smtp-provider",
            loader: (container, config) => {
                const smtpService = new custom_smtp_1.CustomSmtpService(config);
                container.register("custom-smtp-provider", smtpService);
            },
        },
    ],
    api: {
        store: routes,
    },
};

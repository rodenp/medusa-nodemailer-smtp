"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    api: {
        store: {
            routes: [
                {
                    method: "POST",
                    path: "/custom-email",
                    handler: __dirname + "/api/routes/store/custom-email.js",
                },
            ],
        },
    },
};

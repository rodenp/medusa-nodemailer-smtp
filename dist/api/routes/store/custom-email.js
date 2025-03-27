"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const POST = async (req, res) => {
    const smtp = req.scope.resolve("custom-smtp-provider");
    const { to, subject, text, html } = req.body;
    if (!to || !subject || (!text && !html)) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        await smtp.sendNotification("custom.email", { to, subject, text, html });
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to send email", details: err.message });
    }
};
exports.POST = POST;

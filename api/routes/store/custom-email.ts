
import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const smtp = req.scope.resolve("custom-smtp-provider");

  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    await smtp.sendNotification("custom.email", { to, subject, text, html });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
};

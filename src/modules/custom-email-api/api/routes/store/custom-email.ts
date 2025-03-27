import { Request, Response } from "express"

export const POST = async (req: Request, res: Response) => {
  const { scope } = req as any // quick fix to access Medusa's DI container
  const smtp = scope.resolve("custom-smtp-provider")

  const { to, subject, text, html } = req.body

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({
      error: "Missing required fields: to, subject, and at least one of text or html.",
    })
  }

  try {
    await smtp.sendNotification("custom.email", {
      to,
      subject,
      text,
      html,
    })

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        error: "Failed to send email",
        details: err.message,
      })
    } else {
      res.status(500).json({
        error: "Unknown error occurred while sending email",
      })
    }
  }
}
import nodemailer from "nodemailer"

type SMTPAuth = {
  user: string
  pass: string
}

type SMTPOptions = {
  fromEmail: string
  host: string
  port: number
  secure: boolean
  auth: SMTPAuth
}

export class CustomSmtpService {
  private transporter
  private fromEmail: string

  constructor(options: SMTPOptions) {
    this.fromEmail = options.fromEmail

    this.transporter = nodemailer.createTransport({
      host: options.host,
      port: options.port,
      secure: options.secure,
      auth: options.auth,
    })
  }

  async sendNotification(identifier: string, data: any): Promise<void> {
    const { to, subject, text, html } = data

    await this.transporter.sendMail({
      from: this.fromEmail,
      to,
      subject,
      text,
      html,
    })
  }
}
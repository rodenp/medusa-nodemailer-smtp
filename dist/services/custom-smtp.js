"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSmtpService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class CustomSmtpService {
    constructor(options) {
        this.fromEmail = options.fromEmail;
        this.transporter = nodemailer_1.default.createTransport({
            host: options.host,
            port: options.port,
            secure: options.secure,
            auth: options.auth,
        });
    }
    async sendNotification(identifier, data) {
        const { to, subject, text, html } = data;
        await this.transporter.sendMail({
            from: this.fromEmail,
            to,
            subject,
            text,
            html,
        });
    }
}
exports.CustomSmtpService = CustomSmtpService;

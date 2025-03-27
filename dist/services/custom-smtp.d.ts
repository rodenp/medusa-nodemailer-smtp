type SMTPAuth = {
    user: string;
    pass: string;
};
type SMTPOptions = {
    fromEmail: string;
    host: string;
    port: number;
    secure: boolean;
    auth: SMTPAuth;
};
export declare class CustomSmtpService {
    private transporter;
    private fromEmail;
    constructor(options: SMTPOptions);
    sendNotification(identifier: string, data: any): Promise<void>;
}
export {};

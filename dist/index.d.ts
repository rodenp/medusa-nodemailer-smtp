import { Router } from "express";
import { CustomSmtpService } from "./services/custom-smtp";
declare const _default: {
    service: typeof CustomSmtpService;
    loaders: {
        service: string;
        loader: (container: any, config: any) => void;
    }[];
    api: {
        store: (router: Router) => void;
    };
};
export default _default;

import { SafeUrl } from "@angular/platform-browser";

export interface User {
    name?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    image?: string;
    created_at?: Date;
    role?: string;
};

export interface UserSafe {
    name?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    image?: SafeUrl;
    created_at?: Date;
    role?: string;
};
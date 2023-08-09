import { SafeUrl } from "@angular/platform-browser";

export interface Post{
    id?: number;
    title?: string; 
    brief?: string; 
    introduction?: string;
    conclusion?: string;
    created_at?: string;
    user_id?: number;
    subcategory_id?: number;
    image?: string | SafeUrl;
}
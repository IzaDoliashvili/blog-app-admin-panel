import { BLOG_ROUTES } from "./blogs";
import { USERS_ROUTES } from "./users";


export const ADMIN_ROUTES = [...BLOG_ROUTES, ...USERS_ROUTES];
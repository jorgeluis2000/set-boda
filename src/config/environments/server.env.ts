import "dotenv/config";

export const REST_PORT = Number(process.env.REST_PORT as string);
export const REST_DOMAIN = process.env.REST_DOMAIN as string;
export const LOG_DB = Number(process.env.LOG_DB as string);
export const URL_CLIENT = process.env.URL_CLIENT as string;
export const URL_API_DOCUMENT_STORAGE = process.env.URL_API_DOCUMENT_STORAGE as string;
export const PATH_API_DOCUMENT_STORAGE = process.env.PATH_API_DOCUMENT_STORAGE as string;

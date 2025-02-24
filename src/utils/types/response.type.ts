export type ResponseBusiness<T = unknown> = {
  ok: boolean;
  http_code: number;
  message: string;
  data: T | null;
};

export interface ResponseListBusiness<T = unknown> {
  count: number;
  list: T[];
  currentPage: number;
  maxPages: number;
}

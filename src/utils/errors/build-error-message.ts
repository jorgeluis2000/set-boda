import type { ResponseBusiness } from "@myapp-utils/types/response.type";
import type { Request, Response } from "express";
import { BusinessError } from "./business-error";
import {
  HttpStatus,
  NormalHttpStatus,
} from "@myapp-utils/constants/http-status.constant";

export function buildMessageBusinessError<T>(
  error: Error,
  req: Request,
  res: Response<ResponseBusiness<T>>,
) {
  const defaultValues: ResponseBusiness<T> = {
    ok: false,
    http_code: HttpStatus.ERROR_SYSTEM_UNKNOWN,
    message: req.t("api.error-system"),
    data: null,
  };
  if (error instanceof BusinessError) {
    console.error("❌ Business error:", error);
    return res.status(error.status).json({
      ...defaultValues,
      http_code: error.code,
      message: req.t(error.messageCode),
    });
  }

  console.error("❌ Unknown error:", error);
  return res.status(NormalHttpStatus.INTERNAL_SERVER_ERROR).json(defaultValues);
}

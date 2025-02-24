import type FamilyUseCase from "@myapp-app/usecase/family.usecase";
import {
  HttpStatus,
  NormalHttpStatus,
} from "@myapp-utils/constants/http-status.constant";
import { buildMessageBusinessError } from "@myapp-utils/errors/build-error-message";
import { maxPages } from "@myapp-utils/functions/math.function";
import type {
  IAddGuestRequest,
  ICreateRequest,
  IGetFamilyRequest,
  IListFamilyRequest,
  IUpdateFamilyRequest,
} from "@myapp-utils/interfaces/request/family-request.type";
import type {
  ResponseBusiness,
  ResponseListBusiness,
} from "@myapp-utils/types/response.type";
import type { Request, Response } from "express";

export default class FamilyController {
  constructor(private readonly familyUseCase: FamilyUseCase) {}

  public async getFamily(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IGetFamilyRequest;
    const { family } = data.params;
    const { nameFamily } = data.query;
    try {
      const result = await this.familyUseCase.findOne({ id: Number(family), nameFamily });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.family.get-family.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async getFamilies(
    req: Request,
    res: Response<ResponseBusiness<ResponseListBusiness>>,
  ) {
    const data = req as IListFamilyRequest;
    const { nameFamily, limit, page } = data.query;
    try {
      const count = await this.familyUseCase.count({ nameFamily });
      const result = await this.familyUseCase.finMany({
        nameFamily,
        limit: Number(limit),
        page: Number(page),
      });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.family.get-families.success"),
        data: {
          count,
          currentPage: Number(page),
          maxPages: maxPages(count, Number(limit)),
          list: result,
        },
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async create(req: Request, res: Response<ResponseBusiness>) {
    const data = req as ICreateRequest;
    const { lastName } = data.body;
    try {
      const result = await this.familyUseCase.add({ lastName });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.family.create.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async addGuest(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IAddGuestRequest;
    const { family } = data.params;
    try {
      const result = await this.familyUseCase.addGuest({
        ...data.body,
        family: Number(family),
      });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.family.add-guest.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async update(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IUpdateFamilyRequest;
    const { family } = data.params;
    try {
      const result = await this.familyUseCase.update({
        ...data.body,
        id: Number(family),
      });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.family.update.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }
}

import type GuestUseCase from "@myapp-app/usecase/guest.usecase";
import {
  HttpStatus,
  NormalHttpStatus,
} from "@myapp-utils/constants/http-status.constant";
import { buildMessageBusinessError } from "@myapp-utils/errors/build-error-message";
import type {
  IConfirmCeremonyRequest,
  IConfirmPartyRequest,
  IRemoveGuestRequest,
  IUpdateGuestRequest,
} from "@myapp-utils/interfaces/request/guest-request.type";
import type { ResponseBusiness } from "@myapp-utils/types/response.type";
import type { Request, Response } from "express";

export default class GuestController {
  constructor(private readonly guestUseCase: GuestUseCase) {}

  public async confirmCeremony(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IConfirmCeremonyRequest;
    const { id } = data.params;
    try {
      const result = await this.guestUseCase.confirmCeremony({
        id: Number(id),
        value: data.body.value ?? false,
      });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.guest.confirm-ceremony.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async confirmParty(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IConfirmPartyRequest;
    const { id } = data.params;
    try {
      const result = await this.guestUseCase.confirmParty({
        id: Number(id),
        value: data.body.value ?? false,
      });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.guest.confirm-party.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async updateGuest(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IUpdateGuestRequest;
    const { id } = data.params;
    try {
      const result = await this.guestUseCase.updateGuest({
        ...data.body,
        id: Number(id),
      });
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t(""),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async removeGuest(req: Request, res: Response<ResponseBusiness>) {
    const data = req as IRemoveGuestRequest;
    const { id } = data.params;
    try {
      const result = await this.guestUseCase.remove(Number(id));
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.guest.remove-guest.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async countGuests(req: Request, res: Response<ResponseBusiness>) {
    try {
      const result = await this.guestUseCase.count();
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.guest.count.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async countConfirmCeremony(req: Request, res: Response<ResponseBusiness>) {
    try {
      const result = await this.guestUseCase.countConfirmCeremony();
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.guest.count.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }

  public async countConfirmParty(req: Request, res: Response<ResponseBusiness>) {
    try {
      const result = await this.guestUseCase.countConfirmParty();
      res.status(NormalHttpStatus.OK).json({
        ok: true,
        http_code: HttpStatus.OK,
        message: req.t("api.guest.count.success"),
        data: result,
      });
    } catch (error) {
      buildMessageBusinessError(error as Error, req, res);
    }
  }
}

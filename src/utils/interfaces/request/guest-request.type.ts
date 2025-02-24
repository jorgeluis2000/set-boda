import type { TPerson } from "@myapp-utils/types/guest.type";
import type { Request } from "express";

export interface IConfirmCeremonyRequest extends Request {
  params: {
    id: string;
  };
  body: {
    value?: boolean;
  };
}

export interface IConfirmPartyRequest extends Request {
  params: {
    id: string;
  };
  body: {
    value?: boolean;
  };
}

export interface IUpdateGuestRequest extends Request {
  params: {
    id: string;
  };
  body: TPerson;
}

export interface IRemoveGuestRequest extends Request {
  params: {
    id: string;
  };
}

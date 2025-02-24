import type { TPerson } from "@myapp-utils/types/guest.type";
import type { Request } from "express";

export interface IGetFamilyRequest extends Request {
  params: {
    family: string;
  };
  query: {
    nameFamily?: string;
  };
}

export interface IListFamilyRequest extends Request {
  query: {
    nameFamily?: string;
    limit?: string;
    page?: string;
  };
}

export interface ICreateRequest extends Request {
  body: {
    lastName: string;
  };
}

export interface IAddGuestRequest extends Request {
  body: TPerson;
  params: {
    family: string;
  };
}

export interface IUpdateFamilyRequest extends Request {
  body: {
    lastName: string;
  };
  params: {
    family: string;
  };
}

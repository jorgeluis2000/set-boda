import {
  HttpStatus,
  NormalHttpStatus,
} from "@myapp-utils/constants/http-status.constant";

export class BusinessError extends Error {
  readonly code: number;
  readonly status: number;
  readonly messageCode: string;

  constructor(
    name: string,
    code: number,
    message: string,
    messageCode: string,
    status = NormalHttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super(message);
    this.name = name;
    this.code = code;
    this.status = status;
    this.messageCode = messageCode;
  }
}

const createErrorFactory = (
  name: string,
  code: number,
  status = NormalHttpStatus.INTERNAL_SERVER_ERROR,
) => {
  return class extends BusinessError {
    constructor(message: string, messageCode = "api.error-system") {
      super(name, code, message, messageCode, status);
    }
  };
};

export const ActionAWSBusinessError = createErrorFactory(
  "ActionAWSBusinessError",
  HttpStatus.ERROR_AWS,
  NormalHttpStatus.BAD_REQUEST,
);

export const IncompleteDataBusinessError = createErrorFactory(
  "IncompleteDataBusinessError",
  HttpStatus.CLIENT_ERROR,
  NormalHttpStatus.BAD_REQUEST,
);

export const GeneralDataBaseBusinessError = createErrorFactory(
  "GeneralDataBaseBusinessError",
  HttpStatus.ERROR_GENERAL_DB,
  NormalHttpStatus.BAD_REQUEST,
);

export const ExistItemBusinessError = createErrorFactory(
  "ExistItemBusinessError",
  HttpStatus.ERROR_EXIST_DB,
  NormalHttpStatus.BAD_REQUEST,
);

export const NotExistItemBusinessError = createErrorFactory(
  "NotExistItemBusinessError",
  HttpStatus.ERROR_NOT_FOUND_DB,
  NormalHttpStatus.NOT_FOUND,
);
export const InvalidTypeValueDataBaseBusinessError = createErrorFactory(
  "InvalidTypeValueDataBaseBusinessError",
  HttpStatus.ERROR_INVALID_TYPE_DB,
  NormalHttpStatus.BAD_REQUEST,
);

export const InconsistentValueDataBaseBusinessError = createErrorFactory(
  "InconsistentValueDataBaseBusinessError",
  HttpStatus.ERROR_INVALID_DATA_DB,
  NormalHttpStatus.BAD_REQUEST,
);

export const UnknownBusinessError = createErrorFactory(
  "UnknownBusinessError",
  HttpStatus.ERROR_SYSTEM_UNKNOWN,
);

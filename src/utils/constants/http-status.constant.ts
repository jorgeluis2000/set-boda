/**
 * Estados HTTP pazar dev
 */
export const HttpStatus = {
  ERROR_GENERAL_DB: 6000,
  ERROR_EXIST_DB: 6001,
  ERROR_NOT_FOUND_DB: 6002,
  ERROR_INVALID_TYPE_DB: 6003,
  ERROR_INVALID_DATA_DB: 6004,
  /**
   * @constant ERROR_SYSTEM: 5000
   */
  ERROR_SYSTEM: 5000,
  /**
   * @constant ERROR_SYSTEM_UNKNOWN: 5001
   */
  ERROR_SYSTEM_UNKNOWN: 5001,
  /**
   * @constant ERROR_AWS: 5002
   */
  ERROR_AWS: 5002,
  /**
   * @constant ERROR: 4000
   */
  ERROR: 4000,
  /**
   * @constant CLIENT_ERROR: 4010
   */
  CLIENT_ERROR: 4010,
  /**
   * @constant ERROR_NOT_FOUND: 4004
   */
  ERROR_NOT_FOUND: 4004,
  /**
   * @constant OK: 2000
   */
  OK: 2000,
  /**
   * @constant CREATED: 2001
   */
  CREATED: 2001,
  /**
   * @constant UPDATED: 2002
   */
  UPDATED: 2002,
  /**
   * @constant REMOVED: 2003
   */
  REMOVED: 2003,
};

export const NormalHttpStatus = {
  /**
   * @default 200
   */
  OK: 200,
  /**
   * @default 201
   */
  CREATED: 201,
  /**
   * @default 400
   */
  BAD_REQUEST: 400,
  /**
   * @default 401
   */
  UNAUTHORIZED: 401,
  /**
   * @default 403
   */
  FORBIDDEN: 403,
  /**
   * @default 404
   */
  NOT_FOUND: 404,
  /**
   * @default 500
   */
  INTERNAL_SERVER_ERROR: 500,
  /**
   * @default 501
   */
  NOT_IMPLEMENTED: 501,
};

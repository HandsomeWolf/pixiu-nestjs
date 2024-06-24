export interface SuccessResponse<T> {
  success: true;
  data: T;
  total?: number;
}

export interface ErrorResponse<T> {
  success: false;
  errorMessage: string;
  errorCode?: number;
  showType?: number;
  data: T;
}

function successResponse<T>(data: T, total?: number): SuccessResponse<T> {
  return {
    success: true,
    data,
    total,
  };
}

function errorResponse<T>(
  errorMessage: string,
  errorCode?: number,
  showType?: number,
  data?: T,
): ErrorResponse<T> {
  return {
    success: false,
    errorMessage,
    errorCode,
    showType,
    data,
  };
}

export { successResponse, errorResponse };

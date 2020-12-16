export class BaseResponseDTO {
  exceptionType?: string;
  exceptionMessage?: string;
  success: boolean;
  isBusinessException?: boolean;
}

export class FilteredResponseDTO extends BaseResponseDTO {
  maxCount:number;
}
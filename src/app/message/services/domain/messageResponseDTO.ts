import { BaseResponseDTO, FilteredResponseDTO } from "src/app/infrastructure/apiCaller/domain/responseDTO";
import { GetMessageObject } from "./GetMessageObject";

export class SendMessageResponseDTO extends BaseResponseDTO{
    
}

export class GetMessageResponseDTO extends FilteredResponseDTO{
    result:GetMessageObject[];
}
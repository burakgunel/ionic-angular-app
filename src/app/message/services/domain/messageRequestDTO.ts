import { BaseRequestDTO, FilteredRequestDTO } from "src/app/infrastructure/apiCaller/domain/requestDTO";

export class SendMessageRequestDTO extends BaseRequestDTO{
    TextMessage:string;
    CreatedDate:Date;
}

export class GetMessageRequestDTO extends FilteredRequestDTO{
    
}
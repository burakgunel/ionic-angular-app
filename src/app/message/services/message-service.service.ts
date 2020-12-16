import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallerService } from 'src/app/infrastructure/apiCaller/services/api-caller-service';
import { GetMessageRequestDTO, SendMessageRequestDTO } from './domain/messageRequestDTO';
import { GetMessageResponseDTO, SendMessageResponseDTO } from './domain/messageResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private apiCallerService:ApiCallerService) {


  }

  public SendMessage(request: SendMessageRequestDTO): Observable<SendMessageResponseDTO> {
   return this.apiCallerService.CallApi<SendMessageRequestDTO, SendMessageResponseDTO>('http://myproviderapp.azurewebsites.net/api/message/SendMessage', request);
 }

 public GetMessage(request: GetMessageRequestDTO): Observable<GetMessageResponseDTO> {
  return this.apiCallerService.CallApi<GetMessageRequestDTO, GetMessageResponseDTO>('http://myconsumerapp.azurewebsites.net/api/message/GetMessage', request); 
}


}

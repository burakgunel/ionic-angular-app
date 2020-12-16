import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SendMessageRequestDTO } from './services/domain/messageRequestDTO';
import { MessageServiceService } from './services/message-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage  {
  @ViewChild('message') messageInput:any;
  constructor(private messageService:MessageServiceService) {

  }

  ngOnInit() {

  }


  onSendMessage(message:string){
    let sendMessageRequest : SendMessageRequestDTO = new SendMessageRequestDTO();
    sendMessageRequest.TextMessage = message;
    console.log(sendMessageRequest);
    this.messageService.SendMessage(sendMessageRequest).subscribe((response) => {
      if(response.success){
        this.messageInput.value = "";
        alert("Message send successfully");
      }
      
    })
  }
}

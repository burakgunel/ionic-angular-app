import { Component, OnInit } from '@angular/core';
import { GetMessageObject } from '../message/services/domain/GetMessageObject';
import { GetMessageRequestDTO } from '../message/services/domain/messageRequestDTO';
import { MessageServiceService } from '../message/services/message-service.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.page.html',
  styleUrls: ['./message-list.page.scss'],
})
export class MessageListPage implements OnInit {
  url: string;
  itemListData: GetMessageObject[] = [];
  page_number = 1;
  page_limit = 15;

  constructor(private messageService: MessageServiceService) {

  }

  ngOnInit() {
    this.getData(false, "");
  }

  getData(isFirstLoad: boolean, event: any) {
    let req: GetMessageRequestDTO = new GetMessageRequestDTO();
    req.pageLimit = this.page_limit;
    req.pageNumber = this.page_number;
    this.messageService.GetMessage(req).subscribe((response) => {
      if (response.success) {
        console.log(response);
        if(response.maxCount <= this.itemListData.length)
        {
          event.target.complete();
        }

        for (let i = 0; i < response.result.length; i++) {
          this.itemListData.push(response.result[i]);
        }

        if (isFirstLoad) {
          event.target.complete();
        }
        this.page_number++;
      }
    })
  }

  doInfinite(event) {
    this.getData(true, event);
  }

}

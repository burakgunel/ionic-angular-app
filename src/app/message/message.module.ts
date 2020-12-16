import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessagePageRoutingModule } from './message-routing.module';
import { MessagePage } from './message.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MessagePageRoutingModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}

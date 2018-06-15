import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

import { ComponentsModule } from '../../components/components.module';
import { EmojiProvider } from '../../providers/chat-service/emoji';
import { ChatService } from '../../providers/chat-service/chat-service'

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    ComponentsModule
  ],
  providers: [
    ChatService,
    EmojiProvider
  ]
})
export class ChatPageModule {}

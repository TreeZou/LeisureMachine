import { Component, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Events, Content } from 'ionic-angular';
import { ChatService, ChatMessage, UserInfo } from "../../providers//chat-service/chat-service";
import { ComponentsModule } from '../../components/components.module';
import { EmojiProvider } from '../../providers/chat-service/emoji';
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: ChatMessage[] = [];
  user: UserInfo;
  toUser: UserInfo;
  showEmojiPicker = false;

  editorMsg = '';
  emoji: any[];

  _content: string;

  constructor(navParams: NavParams,
              private chatService: ChatService,
              private events: Events,
              private emojiProvider: EmojiProvider,
              private componentsModule: ComponentsModule) {
    // Get the navParams toUserId parameter
    this.toUser = {
      id: navParams.get('toUserId'),
      name: navParams.get('toUserName')
    };
    this.chatService.getUserInfo()
    .then((res) => {
      console.log(res);
      this.user = res;
    });
  }

  ionViewDidEnter() {
    //get message list
    this.getMsg();

    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      console.log(msg);
      this.pushNewMsg(msg);
    })
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }


    /**
   * @name getMsg
   * @returns {Promise<ChatMessage[]>}
   */
  getMsg() {
    // Get mock message list
    return this.chatService
    .getMsgList()
    .subscribe(res => {
      console.log(res);
      this.msgList = res;
      this.scrollToBottom();
    });
  }


  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

    /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    // Verify user relationships
    if (msg.userId === userId && msg.toUserId === toUserId) {
      this.msgList.push(msg);
    } else if (msg.toUserId === userId && msg.userId === toUserId) {
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    this.emoji = this.emojiProvider.getEmojis();
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea =this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }


  
  /**
   * 发送消息
   * @returns 
   * @description 
   */
  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.chatService.sendMsg(newMsg)
    .then(() => {
      let index = this.getMsgIndexById(id);
      if (index !== -1) {
        this.msgList[index].status = 'success';
      }
    })
  }
   
   /**
    * 表情
    * @param val 
    * @returns value 
    */
   setValue(val: any): any {
    this.editorMsg += val;
  }

}

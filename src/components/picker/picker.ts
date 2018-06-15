import { Component } from '@angular/core';
import { EmojiProvider } from '../../providers/chat-service/emoji';
/**
 * Generated class for the PickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'picker',
  templateUrl: 'picker.html'
})
export class PickerComponent {

  text: string;
  emojiArr = [];

  constructor(public emojiProvider: EmojiProvider) {
    this.text = 'Hello World';
    this.emojiArr = this.emojiProvider.getEmojis()[0];
    console.log(this.emojiArr);
  }

}
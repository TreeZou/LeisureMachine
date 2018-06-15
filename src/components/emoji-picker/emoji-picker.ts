import { Component, forwardRef, ViewChild } from '@angular/core';
import { EmojiProvider } from '../../providers/chat-service/emoji';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Slides } from 'ionic-angular';

export const EMOJI_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojiPickerComponent),
  multi: true
};

@Component({
  selector: 'emoji-picker',
  providers: [EMOJI_PICKER_VALUE_ACCESSOR],
  templateUrl: 'emoji-picker.html'
})
export class EmojiPickerComponent implements ControlValueAccessor {

  emojiArr = [];

  @ViewChild(Slides) slides: Slides;

  _content: string;
  _onChanged: Function;
  _onTouched: Function;

  constructor(public emojiProvider: EmojiProvider) {
    
  }

  goToSlide() {
      this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ionViewDidLoad() {
    alert(1);
    this.emojiArr = this.emojiProvider.getEmojis();
    console.log(this.emojiArr);
  }

  writeValue(obj: any): void {
    this._content = obj;
  }

  registerOnChange(fn: any): void {
    this._onChanged = fn;
    this.setValue(this._content);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private setValue(val: any): any {
    this._content += val;
    if (this._content) {
      this._onChanged(this._content)
    }
  }

}

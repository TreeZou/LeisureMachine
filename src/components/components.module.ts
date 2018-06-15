import { NgModule } from '@angular/core';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker';
import { PickerComponent } from './picker/picker';
@NgModule({
	declarations: [EmojiPickerComponent,
    PickerComponent],
	imports: [],
	exports: [EmojiPickerComponent,
    PickerComponent]
})
export class ComponentsModule {}

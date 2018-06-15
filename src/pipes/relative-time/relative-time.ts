import { Pipe, PipeTransform } from '@angular/core';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import zhCN from 'date-fns/locale/zh_cn';
import enUS from 'date-fns/locale/en';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    const locale = args[0] == 'zh' ? zhCN : enUS;
    return distanceInWordsToNow(new Date(value), {
      addSuffix: true,
      locale
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

/**
 * Generated class for the ItemsCompletedPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'itemsCompleted',
  pure: false
})
export class ItemsCompletedPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items) {
    let itemsCompleted = 0;
    items.forEach(element => {
      if(element.completed == true){
        itemsCompleted++
      }
    });

    return itemsCompleted;
  }
}

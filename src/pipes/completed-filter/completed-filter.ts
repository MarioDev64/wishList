import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

@Pipe({
  name: 'completedFilter',
  pure: false
})

export class CompletedFilterPipe implements PipeTransform {
  
  transform(lists: List[], completed : boolean) {
    
    return lists.filter( lists => {
      return lists.finished === completed
    })
  }
}

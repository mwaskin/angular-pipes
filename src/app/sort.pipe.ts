import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: Object[], propName: string): any {
    return value.sort((a, b) => {
      const nameA = a[propName].toUpperCase();
      const nameB = b[propName].toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}

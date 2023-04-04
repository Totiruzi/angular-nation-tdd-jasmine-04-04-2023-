import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chipUppercased'
})
export class ChipUpperCasedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}

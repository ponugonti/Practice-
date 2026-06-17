import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter',
  standalone: true
})
export class NamefilterPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}


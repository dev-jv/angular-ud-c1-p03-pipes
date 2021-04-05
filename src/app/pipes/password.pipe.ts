import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, state: boolean): string {
    let encr = value.split('');
    if (!state) {
      return value;
    } else {
      const tmn = value.length;
      encr = encr.map(k => '*');
      return encr.join('');
    }
  }
}

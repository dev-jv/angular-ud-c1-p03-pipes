import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {

    value = value.toLocaleLowerCase();
    let exp = value.split(' ');

    if (all) {
      exp = exp.map( term => {
        return term[0].toLocaleUpperCase() + term.substr(1);
      });

    } else {
      exp[0] = exp[0][0].toLocaleUpperCase() + exp[0].substr(1);
    }

    return exp.join(' ');
  }

}

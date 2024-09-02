import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentencecasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if(!value){
      return value;
    }
    return value[0].toLocaleUpperCase()+value.slice(1).toLowerCase();
  }

}

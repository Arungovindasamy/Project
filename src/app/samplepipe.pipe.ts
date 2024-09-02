import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplepipe',
  pure:false
})
export class samplepipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {


    if(!value){
      return value;
    }else{
   return value.charAt(0).toUpperCase().slice(1);
    }
   
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   mydataSource=new BehaviorSubject<any>('1');

   myQuote=new BehaviorSubject<string>('Hellow World!!!!');

   todayQuote=this.myQuote.asObservable();
   




  updateDatasouce(value:any){
    this.mydataSource.next(value);

  }
  updateQuote(myquote:string){
    this.myQuote.next(myquote);
  }
}

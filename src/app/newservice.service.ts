import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private httpClient:HttpClient) { }

   myUrl="https://jsonplaceholder.typicode.com/albums"


   getrecords(){

    return this.httpClient.get<any>(this.myUrl);
   }
}

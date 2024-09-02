import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  image='assets/askart-logo/beautiful-background-td7gsxerv3ecl20h.jpg';

   myInput:any='iam';
   myValue:any=null;
   count=0;
   todayQuote:string | undefined;
   
   
   constructor(private dataService:DataService, private newservice:NewserviceService){

   }

   jsonData:any;
   
   ngOnInit(): void {
     this.dataService.mydataSource.subscribe((data:any)=>{
      this.myValue=data;         
     });

     this.dataService.todayQuote.subscribe((res:string)=>{
      this.todayQuote=res;
     });

     const mynumbers = of(1, 2, 3);

     mynumbers.subscribe((val:any)=>{
      console.log(val);
     })

     this.jsonData=this.newservice.getrecords();

   

     console.log('sss',this.jsonData);
   }
 

   addValue(){
    this.count++;
     this.dataService.updateDatasouce(this.count);

   }

   updateQuote(){
    this.dataService.updateQuote('Welcome to our Universe!!!')
   }



}

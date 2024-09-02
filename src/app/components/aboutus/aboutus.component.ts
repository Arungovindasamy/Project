import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit{

  items = ['sithu','Arun','Kiruthi','Bala','Ilan'];
  paginatedItems:any[]= [];

  constructor(private router:Router,private paginator:PaginationService){

  }
ngOnInit(): void {
  this.paginatedItems=this.paginator.paginate(this.items)
}
 lprevPage() {
  this.paginator.currentPage--;
  this.paginatedItems = this.paginator.paginate(this.items);
}

nextPage() {
  this.paginator.currentPage++;
  this.paginatedItems = this.paginator.paginate(this.items);
}

  onMousenter(hoverElem:HTMLElement){
    hoverElem.style.width ='100%';

  }
  onMouseleave(hoverElem:HTMLElement){

    hoverElem.style.width='auto';

  }

  @HostListener('window:click', ['$event']) onClick(event:any){

    console.log('EventListener Clicked');
    
   }
}

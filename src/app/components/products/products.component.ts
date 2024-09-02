import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  totalItems: any;
  currentPage = 1;
  itemsPerPage=3;
  totalPages = 0;
   

  pages: number[] = [];
  

  data = [{
    id: 1,
    firstName: 'Steven',
    lastName: 'Smith',
    userId: '@1234'
  }, {
    id: 2,
    firstName: 'Json',
    lastName: 'Sam',
    userId: '@1234'
  },
  {
    id: 3,
    firstName: 'Mark',
    lastName: 'Wood',
    userId: '@1234'
  }, {
    id: 4,
    firstName: 'Charly',
    lastName: 'Den',
    userId: '@1234'
  },
  {
    id: 5,
    firstName: 'Cook',
    lastName: 'Warrier',
    userId: '@1234'
  },
  {
    id: 6,
    firstName: 'Magan',
    lastName: 'Schutt',
    userId: '@1234'
  },
  {
    id: 7,
    firstName: 'Will',
    lastName: 'Turner',
    userId: '@1234'
  }

  ];


  ngOnInit(): void {

    this.calculatePages();
    
  }

  calculatePages(){

    this.totalItems = this.data.length;

    if (this.totalItems) {

      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      console.log(this.totalPages);

      for (let i = 1; i <= this.totalPages; i++) {

        this.pages.push(i);
      }

      // this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      // console.log(this.pages);
    }
  }
  clickedPage(page: number) {
    if (page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get filteredData() {

    const start = (this.currentPage - 1) * (this.itemsPerPage);

    const end = start + this.itemsPerPage;

    return this.data.slice(start, end)
  }



}

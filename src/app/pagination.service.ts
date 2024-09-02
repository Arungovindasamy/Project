import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  currentPage = 1;
  pageSize = 2;
  totalPages = 0;

  paginate(arr: any[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return arr.slice(startIndex, endIndex);
  }
}

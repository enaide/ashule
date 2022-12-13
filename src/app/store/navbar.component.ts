import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AshuleRestService } from './services/ashule-rest.service';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavBarComponent {
  searchList: Array<string> = [];

  constructor(private _bookService: AshuleRestService,private _router: Router) {}

  search(keyword: string) {
    if (keyword !== '') {
      this.searchList.push(keyword);
    }
    if (this.searchList.length === 4) {
      this.searchList.shift();
    }
    this._bookService.onSerachTerm.next(keyword);
    // this._router.navigate(['/books'],{ queryParams: { searchTerm: keyword } });
  }

  searchByTerm(searchTerm: string) {
    // this._bookService.onSerachTerm.next(searchTerm);
    this._router.navigate(['/books'],{ queryParams: { searchTerm: searchTerm } });
  }

}

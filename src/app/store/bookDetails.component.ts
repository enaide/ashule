import { Observable, take } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book.model';
import { AshuleRestService } from './services/ashule-rest.service';

@Component({
  templateUrl: 'bookDetails.component.html',
})
export class BookDetailComponent {
  dataObs$: Observable<Book> | undefined;

  constructor(
    public _bookService: AshuleRestService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.pipe(take(1)).subscribe((params) => {
      this.dataObs$ = this._bookService.getBooksByISBN(params['id']);
    });
  }

  goToList(){
    this._router.navigate([`books`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { filter, switchMap, map } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book.model';
import { AshuleRestService } from './services/ashule-rest.service';
import { off } from 'process';

@Component({
  selector: 'bookList',
  templateUrl: 'bookList.component.html',
})
export class BookListComponent implements OnInit {
  searchTerm: boolean | undefined;
  dataObs$: Observable<Book[]> = new Observable<Book[]>();

  constructor(
    public _bookService: AshuleRestService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  imgRedirect(b: Book) {
    this._router.navigate([`books/${b.isbn}/details`]);
  }
}

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
  // dataObs$: Observable<Book[]> = new Observable<Book[]>();

  constructor(
    public _bookService: AshuleRestService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(filter((params: any) => params.searchTerm),
      // switchMap((params) => {
      //   this._bookService.dataObs$ = this._bookService.getBooksByTerm(params.searchTerm).pipe(map((books) => books));
      //   return this._bookService.dataObs$;
      // }),
      // map(result => result)
    ).subscribe(params => {
      this._bookService.onSerachTerm.next(params.searchTerm);
    });
  }

  imgRedirect(b: Book) {
    this._router.navigate([`books/${b.isbn}/details`]);
  }
}

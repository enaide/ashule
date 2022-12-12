import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import {
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/model/book.model';

@Injectable({
  providedIn: 'root',
})
export class AshuleRestService {
  baseUrl: string;

  onSerachTerm: Subject<string> = new Subject<string>();
  onNavBarSerachTerm: Subject<string> = new Subject<string>();
  dataObs$: Observable<Book[]> = new Observable<Book[]>();

  books$ = this.getBooks().pipe(
    map((books) =>
      books
        // .sort((a: Book,b: Book) => a.rating-b.rating)
        // .filter((book) => (book.price && +book.price>0) && (book.authors && book.authors?.length>1) )
        // .filter((book) => (book.price && +book.price>0))
        .slice(0, 10)
    )
  );

  constructor(private http: HttpClient) {
    this.baseUrl = `https://api.angular.schule/`;

    this.dataObs$ = combineLatest([
      this.onSerachTerm.pipe(startWith('')),
      ]).pipe(
      switchMap(([serachTerm,]) => {
        if (serachTerm !== '') {
          return this.getBooksByTerm(serachTerm).pipe(map((books) => books));
        }
        return this.getBooks().pipe(map((books) => books));
      })
    );
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + 'books');
  }

  getBooksByTerm(searchTerm: string) {
    return this.http.get<Book[]>(this.baseUrl + `books/search/${searchTerm}`);
  }

  getBooksByISBN(isbn: string) {
    return this.http.get<Book>(this.baseUrl + `books/${isbn}`);
  }
}

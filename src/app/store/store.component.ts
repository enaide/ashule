import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Book } from '../model/book.model';
import { AshuleRestService } from './services/ashule-rest.service';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent implements OnInit {
  dataObs$: Observable<Book[]> | undefined;

  constructor(public _bookService: AshuleRestService, private router: Router) {}

  ngOnInit(): void {
  }

}

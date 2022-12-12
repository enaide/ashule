import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { BookDetailComponent } from './bookDetails.component';
import { NavBarComponent } from './navbar.component';
import { BookListComponent } from './bookList.component';
import { ControlsModule } from '../controls/controls.module';

let routing = RouterModule.forChild([
  {
    path: '',component: StoreComponent,
    children: [
      { path: 'books', component: BookListComponent },
      { path: 'books/:id/details', component: BookDetailComponent },
      { path: '**', redirectTo: 'store' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, ControlsModule, routing, RouterModule],
  declarations: [
    StoreComponent,
    NavBarComponent,
    BookListComponent,
    BookDetailComponent
  ],
  exports: [StoreComponent, BookDetailComponent, NavBarComponent],
})
export class StoreModule {}

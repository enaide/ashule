import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
// import { BookDetailComponent } from './store/bookDetails.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'books', component: StoreComponent,
      },
      { path: '**', redirectTo: '/books' },
    ]),
    BrowserAnimationsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

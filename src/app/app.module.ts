import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AddBookBtnComponent } from './components/add-book-btn/add-book-btn.component';
import { FilterComponent } from './components/book-list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchBarComponent,
    AddBookBtnComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

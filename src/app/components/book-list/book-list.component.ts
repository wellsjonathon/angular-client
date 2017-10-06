import { Component, Input } from '@angular/core';
import Book from './../../objects/Book';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
    @Input() books: Book[];
}
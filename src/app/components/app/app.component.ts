import { Component } from '@angular/core';
import Book from './../../objects/Book';

const BOOKS: Book[] = [
  {title:'Havana Storm', author:'Clive Cussler', genre:'Adventure', published:'2014', available:true},
  {title:'Dune', author:'Frank Herbert', genre:'Sci-fi', published:'1965', available:false},
  {title:'The Mote in Gods Eye', author:'Larry Niven', genre:'Sci-fi', published:'1974', available:true}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  books = BOOKS;
}

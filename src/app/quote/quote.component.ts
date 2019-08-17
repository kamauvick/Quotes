import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja two', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja three', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja four', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja five', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Ninja', 'This is my ninja', 'vick', new Date(2019, 23, 3))
  ];


  constructor() { }

  ngOnInit() {
  }

}

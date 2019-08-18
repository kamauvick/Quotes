import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  @Output() myData = new EventEmitter();
  quotes: Quote[] = [
    // tslint:disable-next-line:max-line-length
    new Quote('Ninja', 'Life is not a mater of holding mater of holding', 'Jack london', new Date(2019, 8 - 1, 17)),
    new Quote('Polly ', 'Life is a gift..use it', 'Hellen Nike', new Date(2019, 23, 3)),
    new Quote('Rose ', 'This is my ninja', 'vick', new Date(2019, 23, 3)),
    new Quote('Vick', 'Life is not a matter of holding', 'Jack london', new Date(2019, 8 - 1, 17)),
    new Quote('Jane ', 'Life is a gift..use it', 'Hellen Nike', new Date(2019, 23, 3)),
    new Quote('Winnie ', 'This is my ninja', 'vick', new Date(2019, 23, 3))
  ];


  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  toggleQuote(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

 newQuote = new Quote('', '', '', new Date());
 @Output() addQoute = new EventEmitter<Quote>();

 ongezaQuote() {
   this.addQoute.emit(this.newQuote);
 }
  ngOnInit() {
  }

}

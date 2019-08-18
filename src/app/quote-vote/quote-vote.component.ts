import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {

  constructor() {
  }

  @Input() quote: Quote;
  @Output() vote = new EventEmitter();

  ngOnInit() {
  }

  likeMe() {
    this.vote.emit(this.quote);
    this.quote.like += 1;
  }

  dislikeMe() {
    this.vote.emit(this.quote);
    this.quote.dislike += 1;
  }
}

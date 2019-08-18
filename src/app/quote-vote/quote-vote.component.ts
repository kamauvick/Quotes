import {Component, OnInit, Input} from '@angular/core';
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

  ngOnInit() {
  }

  likeMe() {
    this.quote.like += 1;
  }

  dislikeMe() {
    this.quote.dislike += 1;
  }
}

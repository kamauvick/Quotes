import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  numberOfLikes = 0;
  numberOfDislikes = 0;

  constructor() {
  }

  @Input() quote: Quote;
  @Output() vote = new EventEmitter();

  ngOnInit() {
  }

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfDislikes++;
  }
}

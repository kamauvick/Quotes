export class Quote {
  showQuote: boolean;
    constructor(
        public title: string,
        public message: string,
        public author: string,
        public date: Date,
    ) {
      this.showQuote  = true;
    }
}

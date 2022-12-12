import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  @Input('rating') rating: number = 3;

  totalStar: number = 5;
  ratingArray: number[] = [];

  constructor() {}

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }

  drawRating(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}

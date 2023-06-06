import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progressOne: number = 25;
  progressTwo: number = 50;

  getPercentageOne() {
    return `${this.progressOne}%`;
  }
  getPercentageTwo() {
    return `${this.progressTwo}%`;
  }
}

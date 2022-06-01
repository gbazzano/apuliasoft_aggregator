import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggregator-home',
  templateUrl: './aggregator-home.component.html',
  styleUrls: ['./aggregator-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AggregatorHomeComponent {

  constructor(private router: Router) { }

  goToWorkedHours() {
    this.router.navigate([`/workedhours`]);
  }

}

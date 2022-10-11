import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import ArchetypalBarChart from '../../../shared/src/lib/charts/archetypal-bar-chart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'archetypal-bar';

  ngOnInit(): void {
    ArchetypalBarChart();
  }
}

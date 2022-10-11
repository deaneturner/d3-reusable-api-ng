import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import ReusableApiBarChart from '../../../shared/src/lib/charts/reusable-api-bar-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reusable-api-bar';

  ngOnInit(): void {

    d3.tsv('data.tsv')
      .then((data) => {
        return data.map((d) => {
          // @ts-ignore
          d.frequency = +d.frequency;
          return d;
        });
      })
      .then((data) => {
        const container = d3.select('.chart-container');
        const barChart = ReusableApiBarChart();
        const dataset = data;

        barChart
          .width(300)
          .height(200)
          .margin({
            left: 50,
            bottom: 30,
          })
          .on('customMouseOver', (event, data) => {
            // eslint-disable-next-line no-console
            console.log('data', data);
          });

        container.datum(dataset).call(barChart);
      })
      .catch((error) => {
        throw error;
      });
  }
}

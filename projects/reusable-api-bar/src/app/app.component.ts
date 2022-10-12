import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
// @ts-ignore
import ReusableApiBarChart from '../../../shared/src/lib/charts/reusable-api-bar-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'reusable-api-bar';

  ngOnInit(): void {

    d3.tsv('assets/data.tsv')
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

        /*
         * Running ResusableApiBarChart returns 'exports'.
         * 'exports' is a function that takes a selection and returns a chart.
         *
         * width: is a function of 'exports' and it sets the width (private member) property of ReusableApiBarChart.
         */
        barChart
          .width(960)
          .height(500)
          .margin({
            left: 50,
            bottom: 30,
          })
          .on('customMouseOver', (event: any, data: any) => {
            // eslint-disable-next-line no-console
            console.log('data', data);
          });

        /*
         * barchart (the result of running ReusableApiBarChart())
         *  is the function 'exports'.
         *
         * 'exports' accepts a selection as an argument (e.g. dev.chart-container).
         * function exports(_selection){
         *  _selection.each(function(_data){
         *  data = _data;
         */
        container.datum(dataset).call(barChart);
      })
      .catch((error) => {
        throw error;
      });
  }
}

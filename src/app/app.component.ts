import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  optFromInputString = `
 {
   "subtitle": { "text": "Highcharts chart" },
   "series": [{
     "type": "line",
     "data": [11,2,3]
   }, {
     "data": [5,6,7]
   }]
 }
 `;
 optFromInput = JSON.parse(this.optFromInputString);
   updateFromInput = false;
  chartOptions = {
    series: [{
      data: [1, 2, 3]
    }]
  };
  chartCallback = function (chart) {  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false
}

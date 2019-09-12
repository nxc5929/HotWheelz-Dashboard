import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HeatMap from 'highcharts/modules/heatmap'

HeatMap.default(Highcharts);

@Component({
  selector: 'heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  @Input()
  set title(title: string){
    console.log(title);
    this.chartOptions.title.text = title;
  }

  constructor() { }

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 1
    },

    title: {
      text: this.title
    },

    credits: {
      enabled: false
    },

    xAxis: {
      categories: [1, 2, 3, 4, 5, 6]
    },

    yAxis: {
      categories: [1, 2],
      title: null
    },

    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: '#FF0000'
    },

    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      symbolHeight: 150
    },
    
    tooltip: {
      enabled: false
    },

    series: [{
      name: 'Battery Temp',
      borderWidth: 1,
      data: [
        [0, 0, 5], [1, 0, 3], [2, 0, 1], [3, 0, 7], [4, 0, 3], [5, 0, 1],
        [0, 1, 7], [1, 1, 2], [2, 1, 0], [3, 1, 5], [4, 1, 3], [5, 1, 3],
      ],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]
  }

  ngOnInit() { }

}

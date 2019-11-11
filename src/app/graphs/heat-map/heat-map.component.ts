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
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },

    yAxis: {
      categories: ["G", "F", "E", "D", "C", "B", "A"],
      title: null
    },

    colorAxis: {
      reversed: false,
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
      formatter: function () {
          return "<b>" + this.series.yAxis.categories[this.point.y] + '-' + this.series.xAxis.categories[this.point.x] + "</b> is " + this.point.value;
      }
    },

    series: [{
      name: 'Battery Temp',
      borderWidth: 1,
      data: [
        [0, 3, 5], [0, 5, 5],
        [1, 2, 5], [1, 4, 5],
        [2, 1, 5], [2, 3, 5],
        [3, 2, 5], [3, 4, 5],
        [4, 3, 5], [4, 5, 5],
        [5, 2, 5], [5, 4, 5],
        [6, 1, 5], [6, 3, 5],
        [7, 2, 5], [7, 4, 5],
        [8, 3, 5], [8, 5, 5],
        [9, 2, 5], [9, 4, 5],
        [10, 1, 5], [10, 3, 5],
        [11, 2, 5], [11, 4, 5],
        [12, 3, 5], [12, 5, 5],
        [13, 2, 5], [13, 4, 5],
        [14, 1, 5], [14, 3, 5],
        [15, 2, 5], [15, 4, 5],
        [16, 3, 5], [16, 5, 5],
        [17, 2, 5], [17, 4, 5],
        [18, 1, 5], [18, 3, 5],
        [19, 2, 5], [19, 4, 5]
      ],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]
  }

  ngOnInit() { }

}

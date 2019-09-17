import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      zoomType: 'x',
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    yAxis: [{ // Primary yAxis
      title: {
        text: 'RPM',
        style: {
          color: '#FF0000'
        }
      },
      labels: {
        format: '{value} RPM',
        style: {
          color: '#ff0000'
        }
      }
    }, { // Secondary yAxis
      title: {
        text: 'Current',
        style: {
          color: '#006400'
        }
      },
      labels: {
        format: '{value} A',
        style: {
          color: '#006400'
        }
      },
      opposite: true
    }, { // Tertiary yAxis
      gridLineWidth: 0,
      title: {
        text: 'Voltage',
        style: {
          color: '#0000ff'
        }
      },
      labels: {
        format: '{value} V',
        style: {
          color: '#0000ff'
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
    },
    series: [{
      name: 'RPM',
      type: 'spline',
      yAxis: 0,
      color: '#ff0000',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' RPM'
      }
    }, {
      name: 'Current',
      type: 'spline',
      yAxis: 1,
      color: '#006400',
      data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
      tooltip: {
        valueSuffix: ' A'
      }

    }, {
      name: 'Voltage',
      type: 'spline',
      yAxis: 2,
      color: '#0000ff',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: ' V'
      }
    }]
  }

  ngOnInit() { }

}

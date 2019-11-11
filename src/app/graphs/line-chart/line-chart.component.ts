import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  @Input()
  set data(data: {voltage: 0, current: 0, rpm: 0}){
    if(data.voltage){
    this.chartOptions.series[0].data.push(data.rpm);//RPM
    this.chartOptions.series[1].data.push(data.current);//Current
    this.chartOptions.series[2].data.push(data.voltage)//Voltage
    this.checkTooBig(this.chartOptions.series[0].data);
    this.checkTooBig(this.chartOptions.series[1].data);
    this.checkTooBig(this.chartOptions.series[2].data);
    this.updateFlag = true;
    }
  }

  checkTooBig(data: number[]){
    if(data.length > 120){
      data.shift();
    }
  }

  updateFlag = false;

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      zoomType: 'x',
      animation: false
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
      data: [],
      tooltip: {
        valueSuffix: ' RPM'
      }
    }, {
      name: 'Current',
      type: 'spline',
      yAxis: 1,
      color: '#006400',
      data: [],
      tooltip: {
        valueSuffix: ' A'
      }

    }, {
      name: 'Voltage',
      type: 'spline',
      yAxis: 2,
      color: '#0000ff',
      data: [],
      tooltip: {
        valueSuffix: ' V'
      }
    }]
  }

  ngOnInit() { }

}

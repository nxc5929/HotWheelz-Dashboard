import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as More from 'highcharts/highcharts-more'
import * as Gauge from 'highcharts/modules/solid-gauge'

More.default(Highcharts);
Gauge.default(Highcharts);

@Component({
  selector: 'gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  @Input()
  set title(title: string){
    console.log(title);
    this.chartOptions.title.text = title;
  }

  constructor() { }

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'solidgauge'
    },

    title: {
      text: this.title
    },
    
    credits: {
      enabled: false
    },

    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },

    tooltip: {
      enabled: false
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },
    series: [{
      name: 'Speed',
      data: [80]
    }],
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  }

  ngOnInit() {}

}

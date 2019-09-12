import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'realtime-table',
  templateUrl: './realtime-table.component.html',
  styleUrls: ['./realtime-table.component.css']
})
export class RealtimeTableComponent implements OnInit {

  @Input() title: string;

  realTimeData = [
    {title: "Data 1", value: "1"},
    {title: "Data 2", value: "2"},
    {title: "Data 3", value: "3"},
    {title: "Data 4", value: "4"},
    {title: "Data 5", value: "5"},
  ]

  constructor() { }

  ngOnInit() {
  }

}

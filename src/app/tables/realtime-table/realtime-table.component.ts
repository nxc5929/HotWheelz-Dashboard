import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'realtime-table',
  templateUrl: './realtime-table.component.html',
  styleUrls: ['./realtime-table.component.css']
})
export class RealtimeTableComponent implements OnInit {

  @Input() title: string;

  @Input() data: [];

  constructor() { }

  ngOnInit() {
  }

}

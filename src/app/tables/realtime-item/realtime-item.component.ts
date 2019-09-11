import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'realtime-item',
  templateUrl: './realtime-item.component.html',
  styleUrls: ['./realtime-item.component.css']
})
export class RealtimeItemComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}

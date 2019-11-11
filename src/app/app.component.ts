import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotWheelz-Dashboard';
  allData = {voltage: 140, lineChart: [], realTime: [], aux: []};
  socket = new WebSocket("ws://localhost:8081");

  ngOnInit() {
    this.socket.onopen = this.openSocket;

    var self = this;
    this.socket.onmessage = function(result){
      var json = JSON.parse(result.data);
      self.allData.voltage = json["voltage"];
      self.allData.lineChart = json["lineChart"];
      self.allData.realTime = json["realTime"];
      self.allData.aux = json["aux"];
    } 
    
    //this.newData;
  }

  openSocket(){
    console.log("SOCKET HAS BEEN OPENED")
  }

}

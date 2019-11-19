import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotWheelz-Dashboard';
  allData = {connected: false, voltage: 140, lineChart: [], realTime: [], aux: []};
  socket = new WebSocket("ws://localhost:8081");
  collectingData: boolean = false;

  ngOnInit() {
    this.socket.onopen = this.openSocket;

    var self = this;
    this.socket.onmessage = function(result){
      var json = JSON.parse(result.data);
      self.allData.connected = json["connection"];
      if(json["voltage"]){
        self.allData.voltage = json["voltage"];
        self.allData.lineChart = json["lineChart"];
        self.allData.realTime = json["realTime"];
        self.allData.aux = json["aux"];
      }
    } 
    
    //this.newData;
  }

  openSocket(){
    console.log("SOCKET HAS BEEN OPENED")
  }

  isConnected(connected: boolean){
    if(connected){
      return "lawngreen";
    }else{
      return "red";
    }
  }

  collectData(collect: boolean){
    if(this.allData.connected){
      this.collectingData = collect;
      this.socket.send(this.collectingData.toString());
    }else{
      alert("Cannot Collect Data - Please Connect XBee!!");
    }
  }

}

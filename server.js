//--------------------------------------------------------
//------------------WEB SERVER------------------------
//--------------------------------------------------------
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/HotWheelz-Dashboard'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/HotWheelz-Dashboard/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
console.log("Web Server Started... http://localhost:4200");

//--------------------------------------------------------
//------------------BROSWER STREAM------------------------
//--------------------------------------------------------
var SERVER_PORT = 8081;
var WebSocketService = require('ws').Server
var wss = new WebSocketService({port: SERVER_PORT})
var connections = new Array;

wss.on('connection', newConnection)

function newConnection(client){
    console.log("New Browser Connection");
    connections.push(client);
    client.on('close', function() { // when a client closes its connection
            console.log("Browser Connection Closed"); // print it out
            var position = connections.indexOf(client); // get the client's position in the array
            connections.splice(position, 1); // and delete it from the array
        });
}

function broadcastToBrowsers(data){
    for(connection in connections){
        connections[connection].send(data);
    }
}

//--------------------------------------------------------
// -----------------------SERIAL PORT---------------------
//--------------------------------------------------------
var SerialPort = require('serialport');
var portNam = process.argv[2]
var myPort = new SerialPort(portNam, 9600);
var parser = new SerialPort.parsers.Readline();
var connectedToXbee = false;
myPort.pipe(parser)

myPort.on('open', portOpened);
parser.on('data', readNewData);
myPort.on('close', portClosed);
myPort.on('error', showError);

function portOpened(){
    console.log("Port Opened!");
    connectedToXbee = true;
    broadcastToBrowsers(connectionStatusMessage());
}

function portClosed(){
    console.log("Port Closed!!");
    connectedToXbee = false;
    broadcastToBrowsers(connectionStatusMessage());
}

function readNewData(data){
    broadcastToBrowsers(configureForUI(data));
}

function showError(){
    console.log("AN ERROR HAS OCCURED!");
}

function connectionStatusMessage(){
    return JSON.stringify({connection: connectedToXbee})
}

function configureForUI(data){
    var json = JSON.parse(data);
    saveData(json);
    var dataFormat = {
        connection: connectedToXbee,
        voltage: json["Voltage"], 
        lineChart: {voltage: json["Voltage"], current: json["Voltage"] + 1, rpm: json["Voltage"] * 2}, 
        realTime: [{name: "Voltage", value: json["Voltage"]}], 
        aux: [{name: "Voltage", value: json["Voltage"]}]
    };
    return JSON.stringify(dataFormat);
}

//--------------------------------------------------------
// -----------------------SAVING DATA---------------------
//--------------------------------------------------------
var fs = require("fs");
var moment = require('moment');
const folder = "./data/"
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
}
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
writer.pipe(fs.createWriteStream(folder + getTimeStamp() + ".csv"));

function saveData(data){
    writer.write(data);
}

function getTimeStamp(){
    return moment().format('YYYY-MM-DD hh-mm-ssA');
}
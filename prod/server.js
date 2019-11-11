var SERVER_PORT = 8081;
var WebSocketService = require('ws').Server
var wss = new WebSocketService({port: SERVER_PORT})
var connections = new Array;

wss.on('connection', newConnection)

function newConnection(client){
    console.log("New Browser Conenction");
    connections.push(client);
    client.on('close', function() { // when a client closes its connection
            console.log("Browser Connection Closed"); // print it out
            var position = connections.indexOf(client); // get the client's position in the array
            connections.splice(position, 1); // and delete it from the array
        });
    broadcastToBrowsers("HELLO WORLD!");
}

function broadcastToBrowsers(data){
    for(connection in connections){
        connections[connection].send(data);
    }
}

// ---SERIAL PORT--
var SerialPort = require('serialport');
var portNam = process.argv[2]
var myPort = new SerialPort(portNam, 9600);
var parser = new SerialPort.parsers.Readline();
myPort.pipe(parser)

myPort.on('open', portOpened);
parser.on('data', readNewData);
myPort.on('close', portClosed);
myPort.on('error', showError);

function portOpened(){
    console.log("Port Opened!");
}

function portClosed(){
    console.log("Port Closed!!");
}

function readNewData(data){
    configureForUI(data);
    broadcastToBrowsers(configureForUI(data));
}

function showError(){
    console.log("AN ERROR HAS OCCURED!");
}

function configureForUI(data){
    var json = JSON.parse(data);
    var dataFormat = {
        voltage: json["Voltage"], 
        lineChart: {voltage: json["Voltage"], current: json["Voltage"] + 1, rpm: json["Voltage"] * 2}, 
        realTime: [{name: "Voltage", value: json["Voltage"]}], 
        aux: [{name: "Voltage", value: json["Voltage"]}]
    };
    
    return JSON.stringify(dataFormat);
}

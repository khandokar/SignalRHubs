import * as signalR from "@microsoft/signalr";
// Only create once per tab session

let connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .withAutomaticReconnect()
    .build();

connection.onreconnected(connectionId => {
    console.log("Reconnected. Connection ID:", connectionId);
});

try {
    connection.start();
    console.log("Connected. Connection ID:", connection.connectionId);
} catch (err) {
    console.error("Connection failed:", err);
}


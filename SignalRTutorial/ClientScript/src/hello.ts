import * as signalR from "@microsoft/signalr";
let connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .build();


connection.onreconnected(connectionId => {
  console.log("Reconnected. Connection ID:", connectionId);
});  

connection.start()
.then(() => {
  console.log("Connected. Connection ID:", connection.connectionId);
  sessionStorage.setItem("connectionId", connection.connectionId);
})
.catch((err) => console.error(err));

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
})
.catch((err) => console.error(err));

export namespace funcs {
  export const myConnection = connection;
}
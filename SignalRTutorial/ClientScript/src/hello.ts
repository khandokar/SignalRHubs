import * as signalR from "@microsoft/signalr";
 const connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .build();


connection.onreconnected(connectionId => {
console.log("Reconnected. Connection ID:", connectionId);
});  

 connection.on("messageReceived", (group) => {

  //const groupq = `<input type="radio" id="group${group.id}" name="group" value="${group.id}"><label for="group${group.id}">${group.name}</label><br>`;
  //divGroup.innerHTML += groupq;

});

 connection.start().catch((err) => document.write(err));

 connection.start()
  .then(() => {
    console.log("Connected. Connection ID:", connection.connectionId);
  })
  .catch((err) => console.error(err));


export namespace funcs {
    export function hello(): void {
        const message = 'Hello world!';
        console.log(message);
    }
}
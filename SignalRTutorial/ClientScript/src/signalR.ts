import * as signalR from "@microsoft/signalr";

declare global {
  interface Window {
    signalRConnection?: signalR.HubConnection;
    signalRReady?: Promise<signalR.HubConnection>;
  }
}

// 🔒 Singleton pattern with a global Promise
if (!window.signalRReady) {
    window.signalRReady = (async () => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("/hub")
            .withAutomaticReconnect()
            .build();

        window.signalRConnection = connection;

        connection.onreconnected(id => {
            console.log("Reconnected with ID:", id);
        });

        try {
            await connection.start();
            console.log("Connected:", connection.connectionId);
            return connection;
        } catch (err) {
            console.error("SignalR connection failed:", err);
            throw err;
        }
    })();
}

document.addEventListener("DOMContentLoaded", async (event: Event) => {
    try {
         const hiddenConnectionId: HTMLInputElement = document.querySelector("#connectionId");
        // ✅ Wait for connection to be ready
        const connection = await window.signalRReady;
        console.log(hiddenConnectionId);
        if (hiddenConnectionId) {
            hiddenConnectionId.value = connection.connectionId;

        }

        // connection.on("ReceiveMessage", (user, message) => {
        //     console.log(`${user}: ${message}`);
        // });

    }catch (err) {
       console.error("SignalR not ready:", err);
    }
});


document.addEventListener("DOMContentLoaded", async (event: Event) => {
    try {
            const hiddenConnectionId: HTMLInputElement = document.querySelector("#connectionId");
            // ✅ Wait for connection to be ready
            const connection = await window.signalRReady;
            if (hiddenConnectionId) {
                hiddenConnectionId.value = connection.connectionId;
            }

    }catch (err) {
       console.error("SignalR not ready:", err);
    }
});


document.addEventListener("DOMContentLoaded", async (event: Event) => {
    try {
            const hiddenConnectionId: HTMLInputElement = document.querySelector("#connectionId");
            // ✅ Wait for connection to be ready
            const connection = await window.signalRReady;
            if (hiddenConnectionId) {
                hiddenConnectionId.value = connection.connectionId;

            }

            connection.on("GroupCreated", (group) => {
                console.log('GroupCreated');
                console.log(group);
            });

            connection.on("GroupUpdated", (group) => {
                console.log('GroupUpdated');
                console.log(group);
            });

             connection.on("GroupDeleted", (id) => {
                console.log('GroupDeleted');
                console.log(id);
            });

    }catch (err) {
       console.error("SignalR not ready:", err);
    }
});


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
                const table = document.getElementById("tblGroup") as HTMLTableElement;
                const newRow = table.insertRow(); 
                const nameCell = newRow.insertCell(0);
                //const ageCell = newRow.insertCell(1);
                 
                nameCell.textContent = group.name;
                //ageCell.textContent = "30";
                
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


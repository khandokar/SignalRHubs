document.addEventListener("DOMContentLoaded", async (event: Event) => {
    try {
            const hiddenConnectionId: HTMLInputElement = document.querySelector("#connectionId");
            // ✅ Wait for connection to be ready
            const connection = await window.signalRReady;
            if (hiddenConnectionId) {
                hiddenConnectionId.value = connection.connectionId;

            }

            connection.on("GroupCreated", (group) => {
                const table = document.getElementById("tblGroup") as HTMLTableElement;
                const newRow = table.insertRow(); 
                newRow.id = `row-${group.id}`;
                const idCell = newRow.insertCell(0);
                const nameCell = newRow.insertCell(1);

                const hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.name = "item.id";   
                hiddenInput.name = "item.name";     
                hiddenInput.value = group.id.toString();
                idCell.appendChild(hiddenInput);

                nameCell.textContent = group.name;
                
            });

            connection.on("GroupUpdated", (group) => {
                console.log('GroupUpdated');
                console.log(group);
                const row = document.getElementById("row-"+group.id) as HTMLTableRowElement;
                console.log('Row');
                console.log(row);
                if (row) {
                    const cell = row.cells[1] as HTMLTableCellElement;
                    cell.innerText = group.name;
                }

            });

             connection.on("GroupDeleted", (id) => {
                console.log('GroupDeleted');
                console.log(id);
            });

    }catch (err) {
       console.error("SignalR not ready:", err);
    }
});


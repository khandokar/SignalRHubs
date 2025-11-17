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
                const newRow = table.insertRow() as HTMLTableRowElement; 
                newRow.id = `row-${group.id}`;
                const idCell = newRow.insertCell(0);
                const nameCell = newRow.insertCell(1);
                const buttonCell = newRow.insertCell(2);

                const hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.name = "item.id";   
                hiddenInput.name = "item.name";     
                hiddenInput.value = group.id.toString();
                idCell.appendChild(hiddenInput);

                nameCell.textContent = group.name;

                // Create the "Edit" link
                const editLink = document.createElement('a');
                editLink.href = `/Group/Edit/${group.id}`;
                editLink.textContent = 'Edit';

                // Create the "Details" link
                const detailsLink = document.createElement('a');
                detailsLink.href = `/Group/Details/${group.id}`;
                detailsLink.textContent = 'Details';

                // Create the "Delete" link
                const deleteLink = document.createElement('a');
                deleteLink.href = `/Group/Delete/${group.id}`;
                deleteLink.textContent = 'Delete';

                // Combine the links with the separator "|"
                buttonCell.appendChild(editLink);
                buttonCell.appendChild(document.createTextNode(' | '));  // Add separator
                buttonCell.appendChild(detailsLink);
                buttonCell.appendChild(document.createTextNode(' | '));  // Add separator
                buttonCell.appendChild(deleteLink);
                
            });

            connection.on("GroupUpdated", (group) => {
                const row = document.getElementById("row-"+group.id) as HTMLTableRowElement;
                if (row) {
                    const cell = row.cells[1] as HTMLTableCellElement;
                    cell.innerText = group.name;
                }
            });

             connection.on("GroupDeleted", (id) => {
                const row = document.getElementById("row-"+id) as HTMLTableRowElement;
                if (row) {
                    row.remove();
                }
            });

    }catch (err) {
       console.error("SignalR not ready:", err);
    }
});


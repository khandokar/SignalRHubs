using System;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Memory;

namespace SignalRTutorial.Hubs;

public class ChatHub : Hub
{
        public ChatHub()
        {
             
        }
     
        public override async Task OnConnectedAsync()
        {
            string connectionId = Context.ConnectionId;
            string? userIdentifier = Context.UserIdentifier;
            var user = Context.User;
            var features = Context.Features;
            var connectionAborted = Context.ConnectionAborted;
    

            await base.OnConnectedAsync();
        }

        public async Task NewMessage(long username, string message) =>
        await Clients.All.SendAsync("messageReceived", username, message);
}

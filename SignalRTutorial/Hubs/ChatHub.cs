using System;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Memory;

namespace SignalRTutorial.Hubs;

public class ChatHub : Hub
{
        private readonly IMemoryCache _cache;
        public ChatHub(IMemoryCache cache)
        {
             _cache = cache;
        }
     
        public override async Task OnConnectedAsync()
        {
            string connectionId = Context.ConnectionId;
       
            await base.OnConnectedAsync();
        }

        public async Task NewMessage(long username, string message) =>
        await Clients.All.SendAsync("messageReceived", username, message);
}

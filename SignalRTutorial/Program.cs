using Microsoft.EntityFrameworkCore;
using SignalRTutorial.Models;
using Microsoft.AspNetCore.Identity;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

//var connectionString = builder.Configuration.GetConnectionString("SignalRContextConnection") ?? throw new InvalidOperationException("Connection string 'SignalRContextConnection' not found.");;

// Add InMemory DB instead of SQL Server
builder.Services.AddDbContext<SignalRContext>(options =>
    options.UseInMemoryDatabase("InMemoryIdentityDb"));

// Add Identity
builder.Services.AddDefaultIdentity<IdentityUser>(options =>
{
    options.SignIn.RequireConfirmedAccount = false;
})
.AddEntityFrameworkStores<SignalRContext>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();

app.MapRazorPages();

app.Run();

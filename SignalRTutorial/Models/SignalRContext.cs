using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace SignalRTutorial.Models;


public class SignalRContext : IdentityDbContext
{
    public SignalRContext(DbContextOptions<SignalRContext> options)
        : base(options)
    {
    }

    public DbSet<Group> Groups { get; set; } = null!;
}
using System;
using Microsoft.EntityFrameworkCore;

namespace SignalRTutorial.Models;


public class SignalRContext : DbContext
{
    public SignalRContext(DbContextOptions<SignalRContext> options)
        : base(options)
    {
    }

    public DbSet<Group> Groups { get; set; } = null!;
}
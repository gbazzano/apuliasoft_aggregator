using ApuliaSoft.Aggregator.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ApuliaSoft.Aggregator.DAL.Context
{
    public class AggregatorContext : DbContext
    {
        public DbSet<WorkHours> WorkHours { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Employee> Employees { get; set; }

        public AggregatorContext(DbContextOptions<AggregatorContext> options) : base(options)
        {
        }
    }
}
using System.ComponentModel.DataAnnotations.Schema;

namespace ApuliaSoft.Aggregator.Domain.Entities
{
    [Table("Employee")]
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
    }
}
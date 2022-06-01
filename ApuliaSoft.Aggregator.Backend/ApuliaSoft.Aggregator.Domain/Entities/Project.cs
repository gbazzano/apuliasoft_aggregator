using System.ComponentModel.DataAnnotations.Schema;

namespace ApuliaSoft.Aggregator.Domain.Entities
{
    [Table("Project")]
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
    }
}
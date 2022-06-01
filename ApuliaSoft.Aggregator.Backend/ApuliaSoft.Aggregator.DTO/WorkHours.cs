namespace ApuliaSoft.Aggregator.DTO
{
    public class WorkHours
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int EmployeeId { get; set; }
        public DateTime Date { get; set; }
        public int Hours { get; set; }
    }
}
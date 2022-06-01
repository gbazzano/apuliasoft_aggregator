using ApuliaSoft.Aggregator.DTO;

namespace ApuliaSoft.Aggregator.BLL.Extensions
{
    internal static class WorkHoursExtensions
    {
        public static WorkHours ToDTO(this Domain.Entities.WorkHours workHours)
        {
            return new WorkHours()
            {
                Id = workHours.Id,
                ProjectId = workHours.ProjectId,
                EmployeeId = workHours.EmployeeId,
                Date = workHours.Date,
                Hours = workHours.Hours
            };
        }
    }
}

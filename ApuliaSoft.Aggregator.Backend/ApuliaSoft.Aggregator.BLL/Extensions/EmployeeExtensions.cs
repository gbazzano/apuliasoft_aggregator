using ApuliaSoft.Aggregator.DTO;

namespace ApuliaSoft.Aggregator.BLL.Extensions
{
    internal static class EmployeeExtensions
    {
        public static Employee ToDTO(this Domain.Entities.Employee project)
        {
            return new Employee()
            {
                Id = project.Id,
                Name = project.Name
            };
        }
    }
}

using ApuliaSoft.Aggregator.BLL.Extensions;
using ApuliaSoft.Aggregator.BLL.Interfaces;
using ApuliaSoft.Aggregator.DAL.Context;

namespace ApuliaSoft.Aggregator.BLL.Services
{
    public class EmployeeService: BaseService, IEmployeeService
    {
        public EmployeeService(AggregatorContext dbContext) : base(dbContext) {}

        public List<DTO.Employee> GetAllEmployees()
        {
            return _dbContext.Employees.Select(e => e.ToDTO())
                                       .ToList();
        }
    }
}
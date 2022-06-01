using ApuliaSoft.Aggregator.BLL.Extensions;
using ApuliaSoft.Aggregator.BLL.Interfaces;
using ApuliaSoft.Aggregator.DAL.Context;

namespace ApuliaSoft.Aggregator.BLL.Services
{
    public class ProjectService: BaseService, IProjectService
    {
        public ProjectService(AggregatorContext dbContext) : base(dbContext) { }

        public List<DTO.Project> GetAllProjects()
        {
            return _dbContext.Projects.Select(p => p.ToDTO())
                                      .ToList();
        }

        public List<DTO.WorkHours> GetAllWorkHours()
        {
            return _dbContext.WorkHours.Select(wh => wh.ToDTO())
                                       .ToList();
        }
    }
}
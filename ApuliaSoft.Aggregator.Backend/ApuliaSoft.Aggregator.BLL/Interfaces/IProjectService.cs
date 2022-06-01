using ApuliaSoft.Aggregator.DTO;

namespace ApuliaSoft.Aggregator.BLL.Interfaces
{
    public interface IProjectService
    {
        List<Project> GetAllProjects();

        List<WorkHours> GetAllWorkHours();
    }
}

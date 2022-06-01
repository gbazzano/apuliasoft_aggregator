using ApuliaSoft.Aggregator.DTO;

namespace ApuliaSoft.Aggregator.BLL.Extensions
{
    internal static class ProjectExtensions
    {
        public static Project ToDTO(this Domain.Entities.Project project)
        {
            return new Project()
            {
                Id = project.Id,
                Title = project.Title
            };
        }
    }
}

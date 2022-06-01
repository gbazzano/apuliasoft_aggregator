using ApuliaSoft.Aggregator.BLL.Interfaces;
using ApuliaSoft.Aggregator.DTO;
using Microsoft.AspNetCore.Mvc;

namespace ApuliaSoft.Aggregator.API.Controllers
{
    [ApiController]
    [Route("project")]
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<ProjectController> _logger;
        private readonly IProjectService _svcProject;

        public ProjectController(ILogger<ProjectController> logger, IProjectService projectSvc)
        {
            _logger = logger;
            _svcProject = projectSvc;
        }

        /// <summary>
        /// Resturns a list of all the worked hours registered.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("worked-hours")]
        public ActionResult GetAllWorkedHours()
        {
            IEnumerable<WorkHours>? result = null;

            try
            {
                result = _svcProject.GetAllWorkHours();
            }
            catch (Exception ex) {
                _logger.LogError(ex, $"An error occured on method {nameof(GetAllWorkedHours)}.");

                return StatusCode(500, "An unmanaged error occured processing the request.");
            }

            return Ok(result);
        }


        /// <summary>
        /// Resturns a complete list of all available projects.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("all")]
        public ActionResult GetAllProjects()
        {
            IEnumerable<Project>? result = null;

            try
            {
                result = _svcProject.GetAllProjects();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An error occured on method {nameof(GetAllProjects)}.");

                return StatusCode(500, "An unmanaged error occured processing the request.");
            }

            return Ok(result);
        }
    }
}
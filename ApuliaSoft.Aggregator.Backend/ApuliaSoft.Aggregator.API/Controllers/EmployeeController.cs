using ApuliaSoft.Aggregator.BLL.Interfaces;
using ApuliaSoft.Aggregator.DTO;
using Microsoft.AspNetCore.Mvc;

namespace ApuliaSoft.Aggregator.API.Controllers
{
    [ApiController]
    [Route("employee")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;
        private readonly IEmployeeService _svcEmployee;

        public EmployeeController(ILogger<EmployeeController> logger, IEmployeeService employeeSvc)
        {
            _logger = logger;
            _svcEmployee = employeeSvc;
        }

        /// <summary>
        /// Returns all the available employees in DB.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("all")]
        public ActionResult GetAllEmployees()
        {
            IEnumerable<Employee>? result = null;

            // Input validations should be done here if required.

            try
            {
                result = _svcEmployee.GetAllEmployees();
            }
            catch (Exception ex) {
                _logger.LogError(ex, $"An error occured on method {nameof(GetAllEmployees)}.");

                return StatusCode(500, "An unmanaged error occured processing the request.");
            }

            return Ok(result);
        }
    }
}
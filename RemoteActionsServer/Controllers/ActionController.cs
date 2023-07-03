using Microsoft.AspNetCore.Mvc;

namespace RemoteActionsServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActionController: ControllerBase
    {
        private readonly ILogger<ActionController> _logger;

        public ActionController(ILogger<ActionController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetTestData")]
        public ActionResult Get()
        {
            return Ok("Test Data");
        }
    }
}

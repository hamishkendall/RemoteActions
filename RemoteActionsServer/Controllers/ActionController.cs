using Microsoft.AspNetCore.Mvc;
using RemoteActionsServer.Models;

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

        [HttpGet(Name = "TestConnection")]
        public IActionResult Get()
        {
            return Ok();
        }

        [HttpPost(Name = "RunAction")]
        public IActionResult Post([FromBody] RemoteActionModel model)
        {
            if(model.AuthToken != "TEMPTOKEN")
                return Unauthorized();

            int result = ActionExecutor.Execute(model.Action);

            return StatusCode(result);
        }
    }
}

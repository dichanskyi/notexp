using Microsoft.AspNetCore.Mvc;
using Notexp_Backend.Data;
using Notexp_Backend.Services;



namespace Notexp_Backend.Controllers
{
    [Route("api/v1/[controller]"), ApiController ]
    public class UsersController : ControllerBase
    {
        private readonly UserDataContext _userDataContext;
        private readonly IUserService _userService;

        public UsersController (UserDataContext userDataContext, IUserService userService) 
        {
            _userDataContext = userDataContext;
            _userService = userService;
        }
        

        [HttpGet("getAll")]
        public async Task<ActionResult<User[]>> GetAll () 
        {
            List<User> users = await _userService.findAll();

            return Ok(users); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetOne (int id)
        { 
            User? user = await _userService.findOne(id);
            
            if (user == null) 
            {
                return NotFound("User with this id is not found");
            }
            
            return Ok(user); 

        }
    }
}
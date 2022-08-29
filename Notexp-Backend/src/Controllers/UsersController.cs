using Microsoft.AspNetCore.Mvc;

using Notexp_Backend.Data;
using Notexp_Backend.Services;
using Notexp_Backend.Constants.ApiResponses;


namespace Notexp_Backend.Controllers
{
    public class QueryParams
    {
        private int _maxSize = 100;
        private int _size = 50;

        public int page { get; set; } = 1;

        public int size
        {
            get { return _size; }
            set { _size = Math.Min(_maxSize, value); }
        }
    }

    [Route("api/v1/[controller]"), ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IUserService _userService;

        public UsersController(DataContext dataContext, IUserService userService)
        {
            _dataContext = dataContext;
            _userService = userService;
        }


        [HttpGet("getAll")]
        public async Task<ActionResult<User[]>> GetAll(
            [FromQuery]
            QueryParams queryParams
        )
        {
            List<User> usersList = await _userService.findAll();

            IQueryable<User> users = usersList
                .AsQueryable()
                .Skip(queryParams.size * (queryParams.page - 1))
                .Take(queryParams.size);

            return Ok(users.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetOne(int id)
        {
            User? user = await _userService.findOne(id);

            if (user == null)
            {
                return NotFound(ApiResponses.UserNotFound.Message);
            }

            return Ok(user);

        }
    }
}
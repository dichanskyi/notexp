using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Encoder = Notexp_Backend.Utils.Encoders;

using Notexp_Backend.Authorization;
using Notexp_Backend.Data;
using Notexp_Backend.Utils.Auth;



namespace Notexp_Backend.Controllers
{
    [Route("api/v1/[controller]"), ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IConfiguration _configuration;
        private readonly IJwtUtils _jwtUtils;

        public AuthController(DataContext dataContext, IConfiguration configuration, IJwtUtils jwtUtils)
        {
            _dataContext = dataContext;
            _configuration = configuration;
            _jwtUtils = jwtUtils;
        }



        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDto request)
        {
            User userData = new User();

            AuthUtils.CreatePasswordHash(
                request.Passoword,
                out byte[] PassowordSalt,
                out byte[] PassowordHash
            );

            userData.Username = request.Username;
            userData.PasswordHash = PassowordHash;
            userData.PasswordSalt = PassowordSalt;

            _dataContext.Users.Add(userData);

            await _dataContext.SaveChangesAsync();

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserDto request)
        {
            // if (userData.Username != request.Username)
            // {
            //     return BadRequest("User hasnt been found");

            // }

            // if (!AuthUtils.VerifyPasswordHash(request.Passoword, userData.PasswordHash, userData.PasswordSalt)) 
            // {
            //     return BadRequest("The password is wrong!");
            // }

            var token = _jwtUtils.GenerateJwtToken(request);

            return Ok(token);

        }
    }
}
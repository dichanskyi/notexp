using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Encoder = Utils.Encoders;

using Notexp_Backend.Data;



namespace Notexp_Backend.Controllers
{
    [Route("api/v1/[controller]"), ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserDataContext _userDataContext;
        private readonly IConfiguration _configuration;

        public AuthController (UserDataContext userDataContext, IConfiguration configuration)
        {
            _userDataContext = userDataContext;
            _configuration = configuration;
        }



        [HttpPost("register")]
        public async Task<ActionResult<User>> Register (UserDto request)
        {
            User userData = new User();
            
            CreatePasswordHash(
                request.Passoword,
                out byte[] PassowordSalt,
                out byte[] PassowordHash
            );

            userData.Username = request.Username;
            userData.PasswordHash = PassowordHash;
            userData.PasswordSalt = PassowordSalt;

            _userDataContext.Users.Add(userData);
            
            await _userDataContext.SaveChangesAsync();

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login (UserDto request)
        {
            // if (userData.Username != request.Username)
            // {
            //     return BadRequest("User hasnt been found");

            // }

            // if (!VerifyPasswordHash(request.Passoword, userData.PasswordHash, userData.PasswordSalt)) 
            // {
            //     return BadRequest("The password is wrong!");
            // }

            string token = CreateToken(request);

            return Ok(token);

        }

        private string CreateToken (UserDto user)
        {
            List<Claim> claims = new List<Claim> {new Claim(ClaimTypes.Name, user.Username)};

            var key = new SymmetricSecurityKey(
                Encoder.ToBytes(
                    _configuration.GetSection("AppSettings:Token").Value
                )
            );

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var JWT = new JwtSecurityTokenHandler().WriteToken(token);

            return JWT;
        }

        private void CreatePasswordHash (
            string password,
            out byte[] passwordSalt,
            out byte[] passwordHash
        ) {
            using(var hmac = new HMACSHA512()) // <- using statement here makes sure that after this code has completed its work it beeing collected by the garbage collector
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoder.ToBytes(password));
            }
        }

        private bool VerifyPasswordHash (
            string password,
            byte[] passwordHash,
            byte[] passwordSalt
        ) {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computeHash = hmac.ComputeHash(Encoder.ToBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            }
        }
    }
}
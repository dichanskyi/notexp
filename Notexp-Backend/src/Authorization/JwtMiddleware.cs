using Microsoft.Extensions.Options;
using Notexp_Backend.Services;

namespace Notexp_Backend.Authorization
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IConfiguration _configuration;

        public JwtMiddleware(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task Invoke(HttpContext context, IUserService userService, IJwtUtils JwtUtils)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            // var userId = JwtUtils.ValidateJwtToken(token);

            // if (userId != null)
            // {
            // context.Items["User"] = userService.GetById(userId.Value);
            // }

            await _next(context);

        }
    }
}
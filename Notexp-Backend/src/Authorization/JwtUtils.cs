namespace Notexp_Backend.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Notexp_Backend.Authorization;
using Notexp_Backend.Data;

using Encoder = Utils.Encoders;


public interface IJwtUtils
{
    public AuthenticationResult GenerateJwtToken(UserDto user);
    // public int? ValidateJwtToken(string token);
    // public RefreshToken GenerateRefreshToken(string ipAddress);
}

public class JwtUtils : IJwtUtils
{
    private DataContext _context;
    private readonly IConfiguration _configuration;
    private readonly string _secret;

    public JwtUtils(
        DataContext context,
        IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
        _secret = _configuration.GetSection("AppSettings:AcceessTokenSecret").Value;
    }

    public AuthenticationResult GenerateJwtToken(UserDto user)
    {
        List<Claim> claims = new List<Claim> { new Claim(ClaimTypes.Name, user.Username) };

        var key = new SymmetricSecurityKey(
            Encoder.ToBytes(_secret)
        );

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var expiration = DateTime.Now.AddDays(1);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: expiration,
            signingCredentials: creds
        );

        var accessToken = new JwtSecurityTokenHandler().WriteToken(token);

        return new AuthenticationResult()
        {
            AccessTokne = accessToken,
            RefreshToken = accessToken, // * Needs to be generated separately
            // RefreshToken = GenerateRefreshToken(user.Username).toString("D"),
            Expiration = expiration,
        };
    }

    // public int? ValidateJwtToken(string token)
    // {
    //     if (token == null)
    //         return null;

    //     var tokenHandler = new JwtSecurityTokenHandler();
    //     var key = Encoding.ASCII.GetBytes(_secret);
    //     try
    //     {
    //         tokenHandler.ValidateToken(token, new TokenValidationParameters
    //         {
    //             ValidateIssuerSigningKey = true,
    //             IssuerSigningKey = new SymmetricSecurityKey(key),
    //             ValidateIssuer = false,
    //             ValidateAudience = false,
    //             // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
    //             ClockSkew = TimeSpan.Zero
    //         }, out SecurityToken validatedToken);

    //         var jwtToken = (JwtSecurityToken)validatedToken;
    //         var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

    //         // return user id from JWT token if validation successful
    //         return userId;
    //     }
    //     catch
    //     {
    //         // return null if validation fails
    //         return null;
    //     }
    // }

    // public Guid GenerateRefreshToken(string ipAddress)
    // {
    //     var refreshToken = new RefreshToken;
    //     {
    //         Token = getUniqueToken(),
    //         // token is valid for 7 days
    //         Expires = DateTime.UtcNow.AddDays(7),
    //     };

    //     return refreshToken;

    //     string getUniqueToken()
    //     {
    //         // token is a cryptographically strong random sequence of values
    //         var token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
    //         // ensure token is unique by checking against db
    //         var tokenIsUnique = !_context.Users.Any(u => u.RefreshTokens.Any(t => t.Token == token));

    //         if (!tokenIsUnique)
    //             return getUniqueToken();

    //         return token;
    //     }
    // }
}
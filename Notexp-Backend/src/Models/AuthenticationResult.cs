using Notexp_Backend.Entities;

namespace Notexp_Backend.Authorization
{
    public class AuthenticationResult
    {
        public string AccessTokne { get; set; }
        public RefreshToken RefreshToken { get; set; }
        public DateTime Expiration { get; set; }
    }
}

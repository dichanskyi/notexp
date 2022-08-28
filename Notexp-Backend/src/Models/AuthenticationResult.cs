using System;

namespace Notexp_Backend.Authorization
{
    public class AuthenticationResult
    {
        public string AccessTokne { get; set; }
        public string RefreshToken { get; set; }
        public DateTime Expiration { get; set; }
    }
}

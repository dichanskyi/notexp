class JwtSettings
{
    string AcceessTokenSecret { get; set; }
    string RefreshTokenSecret { get; set; }
    double AccessTokenExpirationMinutes { get; set; }
    int RefreshTokenExpirationDays { get; set; }

}
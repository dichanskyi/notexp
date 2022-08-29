using System.ComponentModel.DataAnnotations;

namespace Notexp_Backend
{
    public class User 
    {
        [Key, Required]
        public int id { get; set; }

        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public byte[]? PasswordHash { get; set; }

        [Required]
        public byte[]? PasswordSalt { get; set; }

    }
}
using System.Security.Cryptography;
using Encoder = Notexp_Backend.Utils.Encoders;

namespace Notexp_Backend.Utils.Auth
{
    public class AuthUtils
    {
        public static void CreatePasswordHash(
            string password,
            out byte[] passwordSalt,
            out byte[] passwordHash
        )
        {
            using (var hmac = new HMACSHA512()) // <- using statement here makes sure that after this code has completed its work it beeing collected by the garbage collector
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoder.ToBytes(password));
            }
        }

        public static bool VerifyPasswordHash(
            string password,
            byte[] passwordHash,
            byte[] passwordSalt
        )
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computeHash = hmac.ComputeHash(Encoder.ToBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            }
        }
    }
}
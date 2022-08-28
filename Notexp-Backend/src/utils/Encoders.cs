namespace Notexp_Backend.Utils
{
    class Encoders {
        public static byte[] ToBytes (string value)
        {
            return System.Text.Encoding.UTF8.GetBytes(value);
        } 

    }
}
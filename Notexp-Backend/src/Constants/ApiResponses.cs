namespace Notexp_Backend.Constants.ApiResponses
{
    sealed public class ApiResponse
    {
        public string Message;
        public int Code;

        public ApiResponse(string message, int code)
        {
            Message = message;
            Code = code;
        }

    }
    public class ApiResponses
    {
        static public ApiResponse UserNotFound = new ApiResponse(message: "Such user can not be found!", code: 404);
    }
}
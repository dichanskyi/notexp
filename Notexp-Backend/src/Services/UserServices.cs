using Microsoft.EntityFrameworkCore;
using Notexp_Backend.Data;

namespace Notexp_Backend.Services
{
    public interface IUserService
    {
        Task<List<User>> findAll();
        Task<User?> findOne(int id);
    }

    public class UserService : IUserService 
    {
        private readonly UserDataContext _userDataContext;

        public UserService(UserDataContext userDataContext)
        {
            _userDataContext = userDataContext;
        }


        public async Task<List<User>> findAll ()
        {
            List<User> users = await _userDataContext.Users.ToListAsync();
             
            return users;
        }

        public async Task<User?> findOne (int id)
        { 
            User? user = await _userDataContext.Users.FindAsync(id);

            return user; 
        }
    }
}

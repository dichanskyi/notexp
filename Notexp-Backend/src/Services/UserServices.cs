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
        private readonly DataContext _dataContext;

        public UserService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        public async Task<List<User>> findAll()
        {
            List<User> users = await _dataContext.Users.ToListAsync();

            return users;
        }

        public async Task<User?> findOne(int id)
        {
            User? user = await _dataContext.Users.FindAsync(id);

            return user;
        }
    }
}

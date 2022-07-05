using Microsoft.EntityFrameworkCore;


namespace Notexp_Backend.Data
{

    public class UserDataContext : DbContext
    {
        public UserDataContext(DbContextOptions<UserDataContext> options): base(options) { } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }
        public DbSet<User> Users { get; set; }
    }
}
using Microsoft.EntityFrameworkCore;

namespace CTS.Model
{   
    public class CTSDBContext : DbContext
    {
        public CTSDBContext(DbContextOptions <CTSDBContext> options) : base(options)
        {

        }

        public DbSet<UserModel> Users { get; set; }

        public DbSet<RoleModel> Roles { get; set; }
    }
}

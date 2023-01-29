using CTS.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CTS.Core
{
    public class Repository : IRepository
    {
        private readonly CTSDBContext _db;
        private readonly IConfiguration config;

        public Repository(CTSDBContext db, IConfiguration config)
        {
            _db = db;
            this.config = config;
        }

        public async Task<UserModel> GetUserByID(int id)
        {
            return await _db.Users.Where(data => data.ID == id).FirstOrDefaultAsync();
        }

        public async Task<UserModel> Login(string username, string password)
        {
            return await _db.Users.Where(data => data.UserName == username
                                && data.Password == password).FirstOrDefaultAsync();
            
            //.ToListAsync();
        
        }

        public async Task<bool> Register(UserModel user)
        {
            bool status = false;
            if(user != null)
            {
                ///user.Password = "paswword99";
                user.Password = config.GetSection("DefaultPassword").GetSection("password").Value;
                await _db.Users.AddAsync(user);
                await _db.SaveChangesAsync();
                status = true;
                return status;

            }
            else
            {
                return status;
            }
            
        }

        public async Task<bool> UpdateUserByID(UserModel user)
        {
            bool status = false;
            try
            {
                if(user != null)
                {
                    _db.Users.Update(user);
                    _db.SaveChanges();
                    status = true;
                    return status;
                }
                else { return status; }
            }
            catch(Exception ex)
            {
                throw ex;
            }
            
        }
    }
}

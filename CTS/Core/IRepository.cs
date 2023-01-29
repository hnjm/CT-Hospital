using CTS.Model;
using System.Diagnostics.Eventing.Reader;

namespace CTS.Core
{
    public interface IRepository
    {
        Task<UserModel> Login(string username, string password);
        Task<bool> Register(UserModel user);
        Task<bool> UpdateUserByID(UserModel user);
        Task<UserModel> GetUserByID(int id);
    }
}

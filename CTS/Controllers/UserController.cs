using Azure.Core.Serialization;
using CTS.Core;
using CTS.Model;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client.Platforms.Features.DesktopOs.Kerberos;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Helpers;
//using System.Web.Http;

namespace CTS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IRepository repo;

        public UserController(IRepository repo)
        {
            this.repo = repo;
        }

        //Working Code for Login functionality - Login 0.1
        //[HttpGet]
        //[Route("Login")]
        //public async Task<IActionResult> Login(string username, string password)
        //{
        //    var user = await repo.Login(username, password);
        //    if(user != null) 
        //    {
        //        //if(user.Password == 'paswword99')
        //        return Ok(user);
        //    }
        //    return BadRequest();
        //}

        //Try redirecting - Login 0.2
        [HttpGet]
        [Route("Login")]
        public async Task<IActionResult> Login(string username, string password)
        {
            var user = await repo.Login(username, password);
            if (user != null)
            {
                if (user.Password.Contains("Password99"))
                {
                    var result = "/renewPassword/" + user.ID;
                    //return Ok(Json(user));
                    return Ok(Json(result));
                } 
                else
                    //return Ok(Json("/details"));
                 return Ok(user);
            }
            return BadRequest();
        }



        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserModel user)
        {
            
            if(user == null)
            {
                return BadRequest();
            }
            bool status = await repo.Register(user);
            if(status)
            {
                return CreatedAtAction(nameof(Register), user);
                //return Ok("User Created Succesfully");
            }
            else
            {
                return BadRequest(user);
            } 
        }

        [HttpPut]
        [Route("renewPassword")]
        public async Task<IActionResult> RenewPassword([FromBody] ReNewPasswordModel cred)
        {
            if ((cred.password).Contains(cred.reEnternedPassowrd))
            {
                UserModel user = await repo.GetUserByID(cred.id);
                user.Password = cred.reEnternedPassowrd;
                
                bool status = await repo.UpdateUserByID(user);
                if (status)
                {
                    return Ok("Password changed successfully");
                }
                return BadRequest("Password change failed.");
            }
            else
            {
                return BadRequest("password and confirm password does not match");
            }
        }
    }
}

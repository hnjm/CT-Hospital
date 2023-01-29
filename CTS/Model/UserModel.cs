using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CTS.Model
{
    public class UserModel
    {
        [Key]
        public int ID { get; set; }

        //[Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [ForeignKey("Role_Id")]
        public int Role_Id { get; set; }
    }
}

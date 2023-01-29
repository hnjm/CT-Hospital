using System.ComponentModel.DataAnnotations;

namespace CTS.Model
{
    public class RoleModel
    {
        [Key]
        public int Role_Id { get; set; }
        
        [Required]
        public string Role { get; set; }
    }
}

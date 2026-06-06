using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace api.Models
{
    public class AppUser : IdentityUser
    {
        public List<Portfolio> Portfolios { get; set; } = new List<Portfolio>(); 
    }
}
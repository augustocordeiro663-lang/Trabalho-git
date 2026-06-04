using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : DbContext  // ← "DbContext" (C maiúsculo)
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions)  // ← tipado com a classe
            : base(dbContextOptions)
        {
        }

        public DbSet<Stock> Stocks { get; set; }      // ← plural "Stocks"
        public DbSet<Comment> Comments { get; set; }
    }
}
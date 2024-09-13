using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using GymLog.Models;


namespace GymLog.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Vendas> Vendas { get; set; }
        public DbSet<Produtos> Produtos { get; set; }
        public DbSet<ItensVendas> ItensVenda { get; set; }

        public DbSet<Financeiros> Financeiros { get; set; }
        public DbSet<Pagamentos> Pagamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Clientes>().ToTable("Clientes");
            builder.Entity<Produtos>().ToTable("Produtos");
            builder.Entity<Vendas>().ToTable("Vendas");
            builder.Entity<ItensVendas>().ToTable("ItensVenda");
            builder.Entity<Financeiros>().ToTable("Financeiros");
            builder.Entity<Pagamentos>().ToTable("Pagamentos");
        }
    }
}

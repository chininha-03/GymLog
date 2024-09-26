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
            builder.Entity<Compras>().ToTable("Compras");
            builder.Entity<DeletedWorkout>().ToTable("DeletedWorkout");
            builder.Entity<Workout>().ToTable("Workout");
            builder.Entity<ExerciseTemplate>().ToTable("ExerciseTemplate");
            builder.Entity<FolderRoutines>().ToTable("FolderRoutines");
            builder.Entity<PaginatedWorkoutEvents>().ToTable("PaginatedWorkoutEvents");
            builder.Entity<Routine>().ToTable("Routine");
            builder.Entity<RoutineFolder>().ToTable("RoutineFolder");
            builder.Entity<RoutinesExercises>().ToTable("RoutinesExercises");
            builder.Entity<RoutinesExercisesBody>().ToTable("RoutinesExercisesBody");
            builder.Entity<RoutinesSets>().ToTable("RoutinesSets");
            builder.Entity<Pagamentos>().ToTable("Pagamentos");


        }
        public DbSet<GymLog.Models.DeletedWorkout> DeletedWorkout { get; set; } = default!;
        public DbSet<GymLog.Models.ExerciseTemplate> ExerciseTemplate { get; set; } = default!;
        public DbSet<GymLog.Models.FolderRoutines> FolderRoutines { get; set; } = default!;
        public DbSet<GymLog.Models.PaginatedWorkoutEvents> PaginatedWorkoutEvents { get; set; } = default!;
        public DbSet<GymLog.Models.Routine> Routine { get; set; } = default!;
        public DbSet<GymLog.Models.RoutineFolder> RoutineFolder { get; set; } = default!;
        public DbSet<GymLog.Models.RoutinesExercises> RoutinesExercises { get; set; } = default!;
        public DbSet<GymLog.Models.RoutinesExercisesBody> RoutinesExercisesBody { get; set; } = default!;
        public DbSet<GymLog.Models.RoutinesSets> RoutinesSets { get; set; } = default!;
        public DbSet<GymLog.Models.Workout> Workout { get; set; } = default!;
        public DbSet<GymLog.Models.User> User { get; set; } = default!;
    }
}

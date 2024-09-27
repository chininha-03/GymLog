using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Routine
    {
        public Guid RoutineId { get; set; }
<<<<<<< HEAD
=======

        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
>>>>>>> chininha
        public string Title { get; set; }
        

        [Required(ErrorMessage = "O campo 'Exercícios' é obrigatório.")]
        [Display(Name = "Exercícios")]
        public string Exercises { get; set; }
    }
}

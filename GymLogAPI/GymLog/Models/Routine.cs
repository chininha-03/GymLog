using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Routine
    {
        public Guid RoutineId { get; set; }
<<<<<<< HEAD
=======


>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290
        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
        public string Title { get; set; }
        

        [Required(ErrorMessage = "O campo 'Exercícios' é obrigatório.")]
        [Display(Name = "Exercícios")]
        public string Exercises { get; set; }
    }
}

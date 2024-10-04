using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Workout
    {
        public Guid WorkoutId { get; set; }
<<<<<<< HEAD

        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
=======


        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]


   

>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290
        public string Title { get; set; }

        //[Required(ErrorMessage = "O campo 'Descrição' é obrigatório.")]
        [Display(Name = "Descrição")]
        public string Description { get; set; }

        //[Required(ErrorMessage = "O campo 'Horário de início' é obrigatório.")]
        [Display(Name = "Horário de início")]
        public string StartTime { get; set; }

        //[Required(ErrorMessage = "O campo 'Horário ed término' é obrigatório.")]
        [Display(Name = "Horário de término")]
        public string EndTime { get; set; }

        //[Required(ErrorMessage = "O campo 'Exercícios' é obrigatório.")]
        [Display(Name = "Exercícios")]
        public string Exercises { get; set; }
    }
}




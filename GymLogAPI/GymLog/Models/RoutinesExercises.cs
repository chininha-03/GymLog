using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutinesExercises
    {
        public Guid RoutinesExercisesId { get; set; }

<<<<<<< HEAD
        [Display(Name = "Notas do Exercício")]
=======
   
        [Display(Name = "Notas do Exercício")]

>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290
        public string NotesExercises { get; set; }

        //[Required(ErrorMessage = "O campo 'Tempo de Descanso' é obrigatório.")]
        [Display(Name = "Tempo de Descanso")]
        public int RestSeconds { get; set; }
        public Guid RoutinesSetsId { get; set; }
        public RoutinesSets? RoutinesSets { get; set; }
    }
}

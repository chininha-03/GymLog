using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutinesExercises
    {
        public Guid RoutinesExercisesId { get; set; }
<<<<<<< HEAD
=======

        //[Required(ErrorMessage = "O campo 'Notas do Exercício' é obrigatório.")]
        [Display(Name = "Notas do Exercício")]
>>>>>>> c59d624561c291e39cee03c82862002135c7ace5
        public string NotesExercises { get; set; }

        //[Required(ErrorMessage = "O campo 'Tempo de Descanso' é obrigatório.")]
        [Display(Name = "Tempo de Descanso")]
        public int RestSeconds { get; set; }
        public Guid RoutinesSetsId { get; set; }
        public RoutinesSets? RoutinesSets { get; set; }
    }
}

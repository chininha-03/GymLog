using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutinesExercises
    {
        public Guid RoutinesExercisesId { get; set; }

   
        [Display(Name = "Notas do Exercício")]

        public string NotesExercises { get; set; }

        //[Required(ErrorMessage = "O campo 'Tempo de Descanso' é obrigatório.")]
        [Display(Name = "Tempo de Descanso")]
        public int RestSeconds { get; set; }
        public Guid RoutinesSetsId { get; set; }
        public RoutinesSets? RoutinesSets { get; set; }
    }
}

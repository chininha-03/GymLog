using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutinesExercises
    {
        public Guid RoutinesExerciseId { get; set; }

        //[Required(ErrorMessage = "O campo 'Notas do Exercício' é obrigatório.")]
        [Display(Name = "Notas do Exercício")]
        public string NotesExercises { get; set; }

        //[Required(ErrorMessage = "O campo 'Tempo de Descanso' é obrigatório.")]
        [Display(Name = "Tempo de Descanso")]
        public int RestSeconds { get; set; }
        public long RoutinesSetId { get; set; }
    }
}

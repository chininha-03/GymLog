using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutinesExercisesBody
    {
        public Guid RoutinesExercisesBodyId { get; set; }

        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
        public string Title { get; set; }

        [Required(ErrorMessage = "O campo 'Descrição' é obrigatório.")]
        [Display(Name = "Descrição")]
        public string Description { get; set; }

        [Required(ErrorMessage = "O campo 'Horário de Início' é obrigatório.")]
        [Display(Name = "Horário de Início")]
        public string StartTime { get; set; }

        [Required(ErrorMessage = "O campo 'Horário de Término' é obrigatório.")]
        [Display(Name = "Horário de Término")]
        public string EndTime { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
        public bool IsPrivate { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
<<<<<<< HEAD
        public Guid RoutinesSetId { get; set; }
        public RoutinesSets RoutinesSets { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
         public Guid RoutinesExerciseId { get; set; }
=======
         public Guid RoutinesExercisesId { get; set; }
>>>>>>> c59d624561c291e39cee03c82862002135c7ace5
        public RoutinesExercises RoutinesExercises { get; set; }
    }
}

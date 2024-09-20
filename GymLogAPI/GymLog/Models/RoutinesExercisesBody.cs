using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutinesExercisesBody
    {
        public Guid RoutinesExercisesBodyId { get; set; }
<<<<<<< HEAD
=======

        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
>>>>>>> chininha
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
<<<<<<< HEAD
        public Guid RoutinesSetId { get; set; }
        public RoutinesSets RoutinesSets { get; set; }
        public Guid RoutinesExercisesId { get; set; }
=======

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
        public Guid RoutinesSetId { get; set; }
        public RoutinesSets RoutinesSets { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
         public Guid RoutinesExerciseId { get; set; }
>>>>>>> chininha
        public RoutinesExercises RoutinesExercises { get; set; }
    }
}

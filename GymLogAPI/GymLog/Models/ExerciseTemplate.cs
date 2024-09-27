using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class ExerciseTemplate
    {
        public Guid ExerciseTemplateId { get; set; }


        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
        public string Title { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo' é obrigatório.")]
        [Display(Name = "Tipo")]
        public string Type { get; set; }

        //[Required(ErrorMessage = "O campo 'Primeiro grupo de Músculo' é obrigatório.")]
        [Display(Name = "Primeiro grupo de Músculo")]
        public string PrimaryMuscleGroup { get; set; }

        //[Required(ErrorMessage = "O campo 'Segundo grupo de Músculo' é obrigatório.")]
        [Display(Name = "Segundo grupo de Músculo")]
        public string SecondaryMuscleGroups { get; set; }

        //[Required(ErrorMessage = "O campo 'Personalização' é obrigatório.")]
        [Display(Name = "Personalização")]
        public bool IsCustom { get; set; }
    }
}

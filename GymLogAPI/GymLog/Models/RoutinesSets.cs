using System.ComponentModel.DataAnnotations;
using System.Reflection.PortableExecutable;

namespace GymLog.Models
{
    public class RoutinesSets
    {
        public Guid RoutinesSetId { get; set; }

        [Required(ErrorMessage = "O campo 'Repetição' é obrigatório.")]
        [Display(Name = "Repetição")]
        public int Reps { get; set; }

        [Required(ErrorMessage = "O campo 'Peso' é obrigatório.")]
        [Display(Name = "Peso")]
        public int Peso { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
        public int SetType { get; set; }
    }
}

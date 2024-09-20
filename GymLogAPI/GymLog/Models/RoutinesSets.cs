using System.ComponentModel.DataAnnotations;
using System.Reflection.PortableExecutable;

namespace GymLog.Models
{
    public class RoutinesSets
    {
<<<<<<< HEAD
        public Guid RoutinesSetsId { get; set; }
=======
        public Guid RoutinesSetId { get; set; }

        [Required(ErrorMessage = "O campo 'Repetição' é obrigatório.")]
        [Display(Name = "Repetição")]
>>>>>>> chininha
        public int Reps { get; set; }

        [Required(ErrorMessage = "O campo 'Peso' é obrigatório.")]
        [Display(Name = "Peso")]
        public int Peso { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de conjunto' é obrigatório.")]
        [Display(Name = "Tipo de conjunto")]
        public int SetType { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class DeletedWorkout
    {
        public Guid DeletedWorkoutId { get; set; }
<<<<<<< HEAD

        //[Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Deletar Atividade")]
=======
<<<<<<< HEAD
=======

        //[Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Deletar Atividade")]
>>>>>>> chininha
>>>>>>> c59d624561c291e39cee03c82862002135c7ace5
        public DateTime DeletedAt { get; set; }
    }
}

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
<<<<<<< HEAD

=======
>>>>>>> chininha
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> c59d624561c291e39cee03c82862002135c7ace5
>>>>>>> origin/main
        public DateTime DeletedAt { get; set; }
    }
}

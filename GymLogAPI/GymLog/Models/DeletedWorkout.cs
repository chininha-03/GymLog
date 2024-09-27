using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class DeletedWorkout
    {
        public Guid DeletedWorkoutId { get; set; }
<<<<<<< HEAD
=======


        //[Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Deletar Atividade")]
<<<<<<< HEAD

=======
>>>>>>> chininha
>>>>>>> main
        public DateTime DeletedAt { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class DeletedWorkout
    {
        public Guid DeletedWorkoutId { get; set; }


        //[Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Deletar Atividade")]

        public DateTime DeletedAt { get; set; }
    }
}

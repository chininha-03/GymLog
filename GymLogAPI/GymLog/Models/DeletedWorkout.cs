using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class DeletedWorkout
    {
        public Guid DeletedWorkoutId { get; set; }
<<<<<<< HEAD


        //[Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Deletar Atividade")]
        public DateTime DeletedAt { get; set; }
=======
        //[Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Deletar Atividade")]

       public DateTime DeletedAt { get; set; }
>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290
    }
}

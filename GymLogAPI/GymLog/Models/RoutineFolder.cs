using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class RoutineFolder
    {
        public Guid RoutineFolderId { get; set; }
<<<<<<< HEAD
=======

        [Required(ErrorMessage = "O campo 'Índice' é obrigatório.")]
        [Display(Name = "Índice")]
>>>>>>> chininha
        public int Index { get; set; }

        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
        public string Title { get; set; }

        [Required(ErrorMessage = "O campo 'Criação da Atividade' é obrigatório.")]
        [Display(Name = "Criação da Atividade")]
        public DateTime CreatedAt { get; set; }

        [Required(ErrorMessage = "O campo 'Atualização da Atividade' é obrigatório.")]
        [Display(Name = "Atualização da Atividade")]
        public DateTime UpdatedAt { get; set; }
    }
}

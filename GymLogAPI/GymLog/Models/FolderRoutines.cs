using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class FolderRoutines
    {
        public Guid FolderRoutinesId { get; set; }
<<<<<<< HEAD
=======

        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
>>>>>>> chininha
        public string Title { get; set; }
    }
}

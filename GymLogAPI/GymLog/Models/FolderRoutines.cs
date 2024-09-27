using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class FolderRoutines
    {
        public Guid FolderRoutinesId { get; set; }
        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
        public string Title { get; set; }
    }
}

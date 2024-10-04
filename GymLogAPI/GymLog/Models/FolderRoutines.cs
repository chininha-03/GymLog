using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class FolderRoutines
    {
        public Guid FolderRoutinesId { get; set; }
<<<<<<< HEAD
=======


>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290
        [Required(ErrorMessage = "O campo 'Título' é obrigatório.")]
        [Display(Name = "Título")]
        public string Title { get; set; }
    }
}

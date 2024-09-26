using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class User
    {
        public Guid UserId { get; set; }

        public bool ModeUser { get; set; }

        [Required(ErrorMessage = "O campo 'Nome' é obrigatório.")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo 'Email' é obrigatório.")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        //[Required(ErrorMessage = "O campo 'Senha' é obrigatório.")]
        [Display(Name = "Senha")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "O campo 'Data de Nascimento' é obrigatório.")]
        [Display(Name = "Data de Nascimento")]
        public DateOnly DataNasc { get; set; }
    }
}

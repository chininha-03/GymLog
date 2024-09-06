using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Clientes
    {
        public Guid ClienteId { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório.")]
        [Display(Name = "Nome")]
        public string ClienteName { get; set; }

        [Required(ErrorMessage = "O campo Data de Nascimento é obrigatório.")]
        [Display(Name = "Data de Nascimento")]
        public DateOnly DataNasciemnto { get; set; }

        [Display(Name = "Data de cadastro")]
        public DateOnly DataCadastro { get; set; }

        [Required(ErrorMessage = "O campo Sexo é obrigatório.")]
        [Display(Name = "Sexo")]
        public string Sexo { get; set; }

        [Required(ErrorMessage = "O campo Peso é obrigatório.")]
        [Display(Name = "Peso (KG)")]
        public int  Peso { get; set; }

        [Required(ErrorMessage = "O campo Nível de Atividade é obrigatório.")]
        [Display(Name = "Nível de Atividade")]
        public string NivelAtividade { get; set; }

        [Required(ErrorMessage = "O campo Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "O campo Email é inválido")]
        [Display(Name = "Email")]
        public string Email { get; set; }

    }


}

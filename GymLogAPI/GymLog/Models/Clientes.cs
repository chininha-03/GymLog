using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Clientes
    {
        public Guid ClientesId { get; set; }

        [Required(ErrorMessage = "O campo 'Nome' é obrigatório.")]
        [Display(Name = "Nome")]
        public string ClienteName { get; set; }

        [Required(ErrorMessage = "O campo 'Data de Nascimento' é obrigatório.")]
        [Display(Name = "Data de Nascimento")]                                          
        public DateTime DataNasciemnto { get; set; }

        [Display(Name = "Data de cadastro")]
        public DateTime? DataCadastro { get; set; } = DateTime.Now;

        [Required(ErrorMessage = "O campo 'Sexo' é obrigatório.")]
        [Display(Name = "Sexo")]
        public string Sexo { get; set; }

        [Required(ErrorMessage = "O campo 'Peso' é obrigatório.")]
        [Display(Name = "Peso (KG)")]
        public int  Peso { get; set; }

        [Display(Name = "Nível de Atividade")]
        public string? NivelAtividade { get; set; }

        [Required(ErrorMessage = "O campo 'Email' é obrigatório.")]
        [EmailAddress(ErrorMessage = "O campo Email é inválido")]
        [Display(Name = "Email")]
        public string Email { get; set; }

    }


}

using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Pagamentos
    {
        public Guid PagamentosId { get; set; }

        

        [Required(ErrorMessage = "O campo 'Tipo de Plano' é obrigatório.")]
        [Display(Name = "Tipo de Plano")]
        public string TipoPlano { get; set; }

        [Required(ErrorMessage = "O campo 'Renovar plano' é obrigatório.")]
        [Display(Name = "Renovar plano")]
        public string RenovarPlano { get; set; }

        [Required(ErrorMessage = "O campo 'Planos Atrasados' é obrigatório.")]
        [Display(Name = "Planos Atrasados")]
        public string PlanosAtrasados { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Financeiros
    {
        public Guid FinanceirosId { get; set; }

        [Required(ErrorMessage = "O campo 'Lucros do Mês Anterior' é obrigatório.")]
        [Display(Name = "Lucro do mês anterior")]
        public string LucroMesAnterior { get; set; }

        [Required(ErrorMessage = "O campo 'Lucro atual' é obrigatório.")]
        [Display(Name = "Lucro do mês anterior")]
        public string LucroAtual { get; set; }

        [Required(ErrorMessage = "O campo 'Gastos' é obrigatório.")]
        [Display(Name = "Gastos")]
        public string Gastos { get; set; }


    }
}

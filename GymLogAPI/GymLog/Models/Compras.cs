using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Compras
    {
        public Guid CompraId { get; set; }

        [Required(ErrorMessage = "O campo 'Horário da Compra' é obrigatório.")]
        [Display(Name = "Horário da Compra")]
        public DateTime HorarioCompra {  get; set; }

        [Required(ErrorMessage = "O campo 'Quantidade' é obrigatório.")]
        [Display(Name = "Quantidade")]
        public int Quantidade { get; set; }

        [Required(ErrorMessage = "O campo 'Preço' é obrigatório.")]
        [Display(Name = "Preço")]
        public int Preco { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class ItensVendas
    {
        public Guid ItensVendasId { get; set; }
        public Guid VendasId { get; set; }

        [Display(Name = "Vendas")]
        public Vendas? Vendas { get; set; }
        public Guid ProdutoId { get; set; }

        [Display(Name = "Produto")]
        public Produtos? Produtos { get; set; }

        [Display(Name = "Quantidade do Item")]
        public int QtdadeItem { get; set; }

        [Display(Name = "Total de Itens")]
        public double? TotalItens { get; set; }
    }
}

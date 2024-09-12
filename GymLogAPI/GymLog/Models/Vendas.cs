using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Vendas
    {
        public Guid VendasId { get; set; }

        [Display(Name = "Data da venda")]
        public DateTime DataVendas { get; set; } = DateTime.Now;

        [Display(Name = "Número do Pedido")]
        public int? NumeroPedido { get; set; }

        [Display(Name = "Total da Venda")]
        public double? TotalVendas { get; set; }

        public Guid ClientesId { get; set; }

        [Display(Name = "Cliente")]
        public Clientes Clientes { get; set; }

        public string? UserId { get; set; }
    }
}

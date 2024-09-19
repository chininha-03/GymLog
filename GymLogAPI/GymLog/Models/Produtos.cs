using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Produtos
    {

        public Guid ProdutosId { get; set; }

        [Required(ErrorMessage = "O campo 'Nome do Produto' é obrigatório.")]
        [Display(Name = "Nome do Produto")]
        public string ProdutoNome { get; set; }

        [Required(ErrorMessage = "O campo 'Descrição do Produto' é obrigatório.")]
        [Display(Name = "Descrição do Produto")]
        public string ProdutoDescricao { get; set; }

        [Required(ErrorMessage = "O campo 'Preço' é obrigatório.")]
        [Display(Name = "Preço")]
        public int Preco { get; set; }

        [Required(ErrorMessage = "O campo 'Estoque' é obrigatório.")]
        [Display(Name = "Estoque")]
        public int Estoque { get; set; }

        [Required(ErrorMessage = "O campo 'Categoria' é obrigatório.")]
        [Display(Name = "Categoria")]
        public string Categoria { get; set; }
    }
}

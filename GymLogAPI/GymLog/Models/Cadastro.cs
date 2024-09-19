namespace GymLog.Models
{
    public class Cadastro
    {
       public Guid CadastroId { get; set; }
        public string Nome {  get; set; }
        public string Email { get; set; }
        public string password { get; set; }
        public bool Moduser  { get; set; }
        public string numberPhone { get; set; }
        public string phoneNumber { get; set; }
        
        }
}


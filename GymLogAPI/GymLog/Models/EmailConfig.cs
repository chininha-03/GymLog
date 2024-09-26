using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class EmailConfig
    {
        public Guid EmailConfigId { get; set; }

        [Required(ErrorMessage = "O campo 'De:' é obrigatório.")]
        [Display(Name = "De:")]
        public string From { get; set; }

        [Required(ErrorMessage = "O campo 'Servidor' é obrigatório.")]
        [Display(Name = "Servidor")]
        public string SmtpServer { get; set; }

        [Required(ErrorMessage = "O campo 'Porta' é obrigatório.")]
        [Display(Name = "Servidor")]
        public int Port { get; set; }


        public string UserName { get; set; }
        public string Password { get; set; }
    }
}

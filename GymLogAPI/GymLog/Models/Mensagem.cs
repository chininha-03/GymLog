using MimeKit;
using System.ComponentModel.DataAnnotations;

namespace GymLog.Models
{
    public class Mensagem
    {
        public List<MailboxAddress> To { get; set; }

        [Required(ErrorMessage = "O campo 'Assunto' é obrigatório.")]
        [Display(Name = "Assunto")]
        public string Subject { get; set; }

        [Required(ErrorMessage = "O campo 'Conteúdo' é obrigatório.")]
        [Display(Name = "Conteúdo")]
        public string Content { get; set; }
        public IFormFileCollection Attachamnets { get; set; }
        public Mensagem(IEnumerable<string> to, string subject, string content, IFormFileCollection attachaments)
        {
            To = new List<MailboxAddress>();
            To.AddRange(to.Select(t => new MailboxAddress(t, t)));
            Subject = subject;
            Content = content;
            Attachamnets = attachaments;
        }
    }
}

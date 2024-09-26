using GymLog.Models;

namespace GymLog.Interfaces
{
    public interface IEmailSender
    {
        void SendEmail(Mensagem message);
        Task SendEmailAsync(Mensagem message);
    }
}

using Microsoft.DotNet.Scaffolding.Shared.Messaging;

namespace GymLog.Interfaces
{
    public class IEmailSender
    {
        void SendEmail(Message message);
        Task SendEmailAsync(Message message);
    }
}

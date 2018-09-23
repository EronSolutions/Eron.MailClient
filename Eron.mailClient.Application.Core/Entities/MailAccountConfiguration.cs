using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Eron.mailClient.Application.Core;
using Eron.MailClient.Application.Core.Infrastructure;

namespace Eron.MailClient.Application.Core.Entities
{
    public class MailAccountConfiguration: BaseEntity
    {
        public MailAccountConfiguration()
        {
            this.ServerName = ApplicationSettings.Email.ServerName;
            this.Imap4Port = ApplicationSettings.Email.Imap4Port;
            this.Pop3Port = ApplicationSettings.Email.Imap4Port;
            this.SmtpPort = ApplicationSettings.Email.SmtpPort;
            this.Imap4Address = ApplicationSettings.Email.Imap4Address;
            this.SmtpAddress = ApplicationSettings.Email.SmtpAddress;
            this.Pop3Address = ApplicationSettings.Email.Pop3Address;
            this.SupportPop3 = ApplicationSettings.Email.SupportPop3;
            this.SupportImap4 = ApplicationSettings.Email.SupportImap4;
        }

        public string ServerName { get; set; }

        public string UserName { get; set; }

        public string PasswordHash { get; set; }

        public bool SupportPop3 { get; set; }

        public int Pop3Port { get; set; }

        public bool SupportImap4 { get; set; }

        public int Imap4Port { get; set; }

        public int SmtpPort { get; set; }

        public bool UsesCustomAddresses { get; set; }

        public string SmtpAddress { get; set; }

        public string Imap4Address { get; set; }

        public string Pop3Address { get; set; }

        void CheckCustomAddressValidation()
        {
            if (UsesCustomAddresses)
            {
                this.Pop3Address = null;
                this.Imap4Address = null;
                this.SmtpAddress = null;
            }
        }

        void SetCustomAddressesToNull()
        {
            this.UsesCustomAddresses = false;
            CheckCustomAddressValidation();
        }
    }
}

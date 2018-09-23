using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eron.mailClient.Application.Core
{
    public static class ApplicationSettings
    {
        public static class Pagination
        {
            public static int PageSize = 12;
        }

        public static class Email
        {
            public static string ServerName = "";

            public static int SmtpPort = 12;
            public static int Imap4Port = 12;
            public static int Pop3Port = 12;

            public static string SmtpAddress = "";
            public static string Imap4Address = "";
            public static string Pop3Address = "";

            public static bool SupportImap4 = false;
            public static bool SupportPop3 = false;


        }

        public static string DefaultHeroChars = "ER";
    }
}

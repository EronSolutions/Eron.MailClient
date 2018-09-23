using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Eron.MailClient.Application.Core.Entities.Identity
{

    [DataContract]
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.CreateDateTime = DateTime.Now;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ExternalBearer);
            // Add custom user claims here
            return userIdentity;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        public string PostalCode { get; set; }

        public string SocialNumber { get; set; }

        public string Address { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Position { get; set; }

        public string ImageId { get; set; }

        public string CompanyName { get; set; }

        public string CityName { get; set; }

        public string ProvinceName { get; set; }

        public string FaxNumber { get; set; }

        public DateTime CreateDateTime { get; set; }

    }
}

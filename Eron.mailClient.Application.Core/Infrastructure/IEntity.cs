using System;

namespace Eron.MailClient.Application.Core.Infrastructure
{
    public interface IEntity: IBaseEntity
    {
        Object Id { get; set; }

        bool IsDeleted { get; set; }
    }
}
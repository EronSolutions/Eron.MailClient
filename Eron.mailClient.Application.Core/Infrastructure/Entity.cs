using System;

namespace Eron.MailClient.Application.Core.Infrastructure
{
    public class Entity<TPrimaryKey> : IEntity
    {
        public Entity()
        {
            this.CreateDateTime = DateTime.Now;
        }

        public TPrimaryKey Id { get; set; }

        public string CreatorUserId { get; set; }

        public string UpdateUserId { get; set; }

        public DateTime UpdateDateTime { get; set; }

        public DateTime CreateDateTime { get; private set; }

        public bool IsDeleted { get; set; }

        object IEntity.Id
        {
            get
            {
                return this.Id;
            }
            set
            {
                if (value is TPrimaryKey)
                    this.Id = (TPrimaryKey)value;
            }
        }
    }
}
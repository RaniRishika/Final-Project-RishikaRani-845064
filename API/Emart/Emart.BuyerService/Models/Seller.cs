using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string CompanyName { get; set; }
        public string Gstin { get; set; }
        public string Abtcompany { get; set; }
        public string PostalAddress { get; set; }
        public string CompWebsite { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}

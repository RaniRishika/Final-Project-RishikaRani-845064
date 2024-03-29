﻿using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public DateTime? CreatedDateTime { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}

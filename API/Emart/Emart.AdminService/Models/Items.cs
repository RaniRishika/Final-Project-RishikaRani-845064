using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int ItemId { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDesp { get; set; }
        public int? StockNo { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }
        public int? CatId { get; set; }
        public int? SubCId { get; set; }
        public int? SellerId { get; set; }

        public virtual Category Cat { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubC { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}

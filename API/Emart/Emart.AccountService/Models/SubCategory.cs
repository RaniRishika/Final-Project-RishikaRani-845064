using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int SubCId { get; set; }
        public string SubCName { get; set; }
        public string BriefSubCdetails { get; set; }
        public int? Gst { get; set; }
        public int? CatId { get; set; }

        public virtual Category Cat { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}

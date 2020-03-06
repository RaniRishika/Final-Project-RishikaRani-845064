using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repository
{
  public   interface IItemRepository
    {
        List<Items> ViewItems(int sid);
        void AddItem(Items item);
        Items GetItem(int itemid);
        void DeleteItem(int itemid);
        void UpdateItem(Items item);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int CatId);
        List<Items> ViewItems(int sid, int SubCId);
     }
}

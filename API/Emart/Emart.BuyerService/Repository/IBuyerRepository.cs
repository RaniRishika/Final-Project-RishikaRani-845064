using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repository
{
   public interface IBuyerRepository
    {
        List<Items> SearchItems(String name);
        void BuyItem(PurchaseHistory item);
        void EditProfile(Buyer buyer);
        Buyer GetProfile(int bid);
        List<PurchaseHistory> PurchaseHistory(int bid);

        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int catid);

        void AddCart(Cart cart);
        List<Cart> ViewCart(int bid);

        void DeleteCart(int cartId);

        Items GetItem(int itemid);



    }
}

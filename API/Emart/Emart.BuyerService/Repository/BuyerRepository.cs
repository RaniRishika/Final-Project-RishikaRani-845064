using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repository
{
    public class BuyerRepository :IBuyerRepository
    {
        private readonly EmartContext _context;

        public BuyerRepository(EmartContext context)
        {
            _context = context;
        }
        public List<Items> SearchItems(string name)
        {
            List<Items> item = _context.Items.Where(e => e.ItemName == name).ToList();
            return item;
        }

        public void BuyItem(PurchaseHistory item)
        {
            _context.PurchaseHistory.Add(item);
            _context.SaveChanges();
           
        }

        public void EditProfile(Buyer buyer)
        {
            _context.Buyer.Update(buyer);
            _context.SaveChanges();
        }

        public Buyer GetProfile(int bid)
        {
            return _context.Buyer.Find(bid);
            
        }

        public List<PurchaseHistory> PurchaseHistory(int bid)
        {
            List<PurchaseHistory> PurchaseHist = _context.PurchaseHistory.Where(e => e.BuyerId == bid).ToList();
            return PurchaseHist;
        }
        public List<Category> GetCategories()
        {
            List<Category> category = _context.Category.ToList();
            return category;
        }
        public List<SubCategory> GetSubCategories(int catid)
        {
            List<SubCategory> SubCategories = _context.SubCategory.Where(e => e.CatId == catid).ToList();
            return SubCategories;
        }
        public void AddCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }
        public List<Cart> ViewCart(int bid)
        {
            List<Cart> cart = _context.Cart.Where(e => e.BuyerId== bid).ToList();
            return cart;
        }
        public void DeleteCart(int cartId)
        {
            Cart cart = _context.Cart.Find(cartId);
            _context.Remove(cart);
            _context.SaveChanges();
        }
        public Items GetItem(int itemid)
        {
            return _context.Items.Find(itemid);
        }

    }
}

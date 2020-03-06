using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repository
{
    public class ItemRepository :IItemRepository
    {
        private readonly EmartContext _context;
        public ItemRepository(EmartContext context)
        {
            _context = context;
        }
        public List<Items> ViewItems(int sid)
        {
            List<Items> items = _context.Items.Where(e => e.SellerId == sid).ToList();
                return items;
        }

        public void AddItem(Items item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }

        public Items GetItem(int itemid)
        {
            return _context.Items.Find(itemid);
        }

        public void DeleteItem(int itemid)
        {
            Items i = _context.Items.Find(itemid);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public void UpdateItem(Items item)
        {
            _context.Update(item);
            _context.SaveChanges();
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
        public List<Items> ViewItems(int sid,int SubCId)
        {
            List<Items> items = _context.Items.Where(e => e.SellerId == sid&&e.SubCId==SubCId).ToList();
            return items;
        }

    }
}

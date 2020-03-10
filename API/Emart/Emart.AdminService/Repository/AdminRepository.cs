using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartContext _context;
        public AdminRepository(EmartContext context)
        {
            _context = context;
        }
        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory subcategory)
        {
            _context.Add(subcategory);
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
        public List<Buyer> GetBuyerProfile()
        {
            List<Buyer> buyer = _context.Buyer.ToList();
            return buyer;

        }
        public List<Seller> GetProfiles()
        {
            List<Seller> seller = _context.Seller.ToList();
            return seller;
        }
        public Category GetCategoryById(int CatId)
        {
            Category category = _context.Category.Find(CatId);
            return category;
        }
        public SubCategory GetSubCategoryById(int SubCId)
        {
            SubCategory subcategory = _context.SubCategory.Find(SubCId);

            return subcategory;

        }


        public void DeleteCategory(int CatId)
        {
            Category category = _context.Category.Find(CatId);
            _context.Remove(category);
            _context.SaveChanges();
        }
        public void DeleteSubCategory(int SubCId)
        {
            SubCategory subcategory = _context.SubCategory.Find(SubCId);
            _context.Remove(subcategory);
            _context.SaveChanges();
        }
        public void UpdateCategory(Category category)
        {
            _context.Update(category);
            _context.SaveChanges();
        }
        public void UpdateSubCategory(SubCategory subcategory)
        {
            _context.Update(subcategory);
            _context.SaveChanges();
        }
        public Category GetCategoryByName(string name)
        {
            return _context.Category.SingleOrDefault(e => e.CatName == name);
        }

        public SubCategory GetSubCategoryByName(string name)
        {
            return _context.SubCategory.SingleOrDefault(e => e.SubCName == name);
        }
    }
}

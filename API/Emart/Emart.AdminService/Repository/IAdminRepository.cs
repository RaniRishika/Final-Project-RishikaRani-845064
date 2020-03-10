using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repository
{
   public  interface IAdminRepository
    {
       void AddCategory(Category category);

        void AddSubCategory(SubCategory subcategory);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int CatId);
       List<Buyer> GetBuyerProfile( );
       List<Seller>GetProfiles();
        Category GetCategoryById(int CatId);
        SubCategory GetSubCategoryById(int SubCId);
        void DeleteCategory(int CatId);
        void DeleteSubCategory(int SubCId);
        void UpdateCategory(Category category);
        void UpdateSubCategory(SubCategory subcategory);
        Category GetCategoryByName(string name);
        SubCategory GetSubCategoryByName(string name);



    }
}

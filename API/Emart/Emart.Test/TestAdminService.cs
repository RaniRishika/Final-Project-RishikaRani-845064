using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminService.Models;
using Emart.AdminService.Repository;

namespace Emart.Test
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EmartContext());
        }
        [Test]
        [Description("Getting category by id")]
        public void GetCategoryById()
        {
            var result = _repo.GetCategoryById(1);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description(" Adding Categories")]
        public void AddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CatId = 17,
                CatName = "Abc",
                BriefDetails = "Novable",

            });
            var result = _repo.GetCategoryById(17);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Getting all Categories")]
        public void GetCategories()
        {
            var result = _repo.GetCategories();
            Assert.GreaterOrEqual(result.Count, 0);
        }
        [Test]
        [Description("Deleting category")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(17);
            var result = _repo.GetCategoryById(17);
            Assert.Null(result);
        }
        [Test]
        [Description(" Getting SubCategory")]
        public void TestGetSubCategoryById()
        {
            var result = _repo.GetSubCategoryById(11);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description(" Adding SubCategory")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                CatId = 17,
                SubCId = 177,
                SubCName="Mobile devices",
                Gst=356
            });
            var result = _repo.GetSubCategoryById(177);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Getting SubCategories by Categoryid")]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories(1);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Deleting subCategory")]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory(442);
            var result = _repo.GetSubCategoryById(442);
            Assert.Null(result);
        }
        [Test]
        [Description(" getting all buyer profiles")]
        public void TestGetBuyerProfile()
        {
            var result = _repo.GetBuyerProfile();
            Assert.GreaterOrEqual(result.Count, 0);

        }
        [Test]
        [Description(" getting all seller profiles")]
        public void TestGetProfiles()
        {
            var result = _repo.GetProfiles();
            Assert.GreaterOrEqual(result.Count, 0);
        }
        [Test]
        [Description("Updating Categories")]
        public void TestUpdateCategory()
        {

            Category category = _repo.GetCategoryById(1);
            category.BriefDetails = "accurate";
            _repo.UpdateCategory(category);
            Category category1 = _repo.GetCategoryById(1);
            Assert.AreSame(category, category1);

        }
        [Test]
        [Description("Updating SubCategories")]
        public void TestUpdateSubCategory()
        {
            SubCategory subcategory = _repo.GetSubCategoryById(442);
            subcategory.BriefSubCdetails = "fully automated";

            _repo.UpdateSubCategory(subcategory);
            SubCategory subcategory1= _repo.GetSubCategoryById(442);

            Assert.AreSame(subcategory, subcategory1);

        }
        [Test]
        [Description("getting category by category name")]
        public void TestGetCategoryByName()
        {
            var result = _repo.GetCategoryByName("Glossory");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("getting subcategory by subcategory name")]
        public void TestGetSubCategoryByName()
        {
            var result = _repo.GetSubCategoryByName("Snacks");
            Assert.IsNotNull(result);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Models;
using Emart.SellerService.Repository;

namespace Emart.Test
{
    [TestFixture]
    class TestItemService

    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new EmartContext());
        }
        [Test]
        [Description("Getitem by itemid")]
        public void TestGetItem()
        {
            var result = _repo.GetItem(1002);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Getting all Categories")]
        public void GetCategories()
        {
            var result = _repo.GetCategories();
            Assert.GreaterOrEqual(result.Count, 0);
        }
        [Test]
        [Description("Getting SubCategories by Categoryid")]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories(1);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("view items by seller id")]
        public void TestViewItems()
        {
            var result = _repo.ViewItems(1);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("additems ")]
        public void TestAddItem()
        {
            _repo.AddItem(new Items()
            {
                ItemId = 101,
                Price = 25,
                ItemName = "biscuits",
                ItemDesp = "Cream",
                StockNo=123,
                Remarks="good",
                Image = "gift.jpg",
                CatId=1,
                SubCId=11,
                SellerId = 1
                 
   
    });
            var result = _repo.GetItem(101);
            Assert.NotNull(result);


        }
        [Test]
        [Description("Delete Item")]
        public void TestDeleteItem()
        {
            _repo.DeleteItem(101);
            var result = _repo.GetItem(101);
            Assert.Null(result);
        }
        [Test]
        [Description("Updating Items")]
        public void TestUpdateItem()
        {
            Items item = _repo.GetItem(1);
            item.Price = 250;
          
            _repo.UpdateItem(item);
            Items item1 = _repo.GetItem(1);
            Assert.AreSame(item, item1);

        }
        [Test]
        [Description("view items by seller id and subcategory id")]
        public void TestViewItem()
        {
            var result = _repo.ViewItems(1,11);
            Assert.IsNotNull(result);
        }
    }
}

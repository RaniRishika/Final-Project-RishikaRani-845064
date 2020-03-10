using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.BuyerService.Models;

using Emart.BuyerService.Repository;

namespace Emart.Test
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EmartContext());
        }
        [Test]
        [Description("getting profile of buyer based on buyerid")]
        public void TestGetProfile()
        {
         var result= _repo.GetProfile(129);
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
        [Description("Updating Buyer's profile")]
        public void TestEditProfile()
        {

            Buyer buyer = _repo.GetProfile(129);
            buyer.Mobile = "9951924809";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.GetProfile(129);
            Assert.AreSame(buyer, buyer1);

        }
        [Test]
        [Description("purchase History of a specific buyer")]
        public void TestPurchaseHistory()
        {
            var result = _repo.PurchaseHistory(1);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("getting items by itemid")]
        public void TestGetItem()
        {
            var result = _repo.GetItem(1002);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Get Cart by item id")]
        public void TestGetCart()
        {
            var result = _repo.GetCart(663);
            Assert.IsNotNull(result);
        }


        [Test]
        [Description("adding to cart")]
        public void TestAddCart()
        {
            _repo.AddCart(new Cart()
            {
                 ItemId=1,
                 Price =25,
                 ItemName ="biscuits",
                 ItemDesp="Cream",
                 Image="gift.jpg",
                 CartId=87,
                BuyerId = 1
              });
            var result = _repo.GetCart(87);
            Assert.NotNull(result);
        }
        [Test]
        [Description("view cart by buyer id")]
        public void TestViewCart()
        {
            var result = _repo.ViewCart(1);
            Assert.IsNotNull(result);

        }
        
        [Test]
        [Description("buyitems")]
        public void TestBuyItems()
        {
            _repo.AddCart(new Cart()
            {
                ItemId = 1,
                Price = 25,
                ItemName = "biscuits",
                ItemDesp = "Cream",
                Image = "gift.jpg",
                CartId = 879,
                BuyerId = 1
            });
            var result = _repo.GetCart(579);
            Assert.NotNull(result);
         }
        [Test]
        [Description("search Items")]
        public void TestSearchItems()
        {
            var result = _repo.SearchItems("toycar");
            Assert.IsNotEmpty(result);
        }
    }
}

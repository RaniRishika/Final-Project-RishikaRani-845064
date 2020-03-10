using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Models;
using Emart.SellerService.Repository;


namespace Emart.Test
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EmartContext());
        }

        [Test]
        [Description("getting seller profile")]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Updating Seller's profile")]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile(4);
            seller.Password = "4545";

            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile(4);
            Assert.AreSame(seller,seller1);

        }
    }
  
}

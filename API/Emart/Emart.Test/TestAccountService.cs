using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AccountService.Models;
using Emart.AccountService.Repository;

namespace Emart.Test
{
    [TestFixture]
    class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EmartContext());
        }
        [Test]
        [Description("Login Seller")]
        public void LoginSeller()
        {
            var result = _repo.LoginSeller("Sravani", "1234");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Login Buyer")]
        public void LoginBuyer()
        {
            var result = _repo.LoginBuyer("Mrudhula", "45454");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Seller Registration")]
        public void RegisterSeller()
        {
            _repo.RegisterSeller(new Seller()
            {

                Id = 6,
                Username = "Asha",
                Password = "4674",
                CompanyName = "CGGB",
                Gstin = "147",
                Abtcompany = "good",
                PostalAddress = "Tadepalligudem",
                CompWebsite = "www.cggb.com",
                Email = "asha@gmail.com",
                Contact = "9948664427"

            });
            var result = _repo.LoginSeller("Asha","4674");
            Assert.NotNull(result);

        }
        [Test]
        [Description("Buyer Registration")]
        public void RegisterBuyer( )
        {
            _repo.RegisterBuyer(new Buyer()
            {
                Id = 5,
                Username = "chandu",
                Password = "9764",
                Email = "chandu@yahoo.com",
                Mobile = "7058925671",
                CreatedDateTime = DateTime.Now
            });
            var result = _repo.LoginBuyer("chandu", "9764");
            Assert.NotNull(result);

        }



    }
}

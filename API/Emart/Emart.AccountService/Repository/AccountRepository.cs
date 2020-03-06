

using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repository
{
    public class AccountRepository : IAccountRepository

    {
        private readonly EmartContext _context;
        public AccountRepository(EmartContext context)
        {
            _context = context;
        }


        public Seller LoginSeller(string uname, string pwd)
        {
            Seller seller = _context.Seller.SingleOrDefault(e => e.Username == uname && e.Password == pwd);
            if (seller != null)
            {
                return seller;
            }
            return null;
        }

        public Buyer LoginBuyer(string uname, string pwd)
        {

            Buyer buyer = _context.Buyer.SingleOrDefault(e => e.Username == uname && e.Password == pwd);
            if (buyer != null)
            {
                return buyer;
            }
            return null;
        }

        public void RegisterBuyer(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

        public void RegisterSeller(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
           
        }
    }
}

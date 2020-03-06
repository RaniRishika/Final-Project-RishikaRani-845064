using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repository
{
    public class SellerRepository :ISellerRepository
    {
        private readonly EmartContext _context;
        public SellerRepository(EmartContext context)
        {
           _context = context;
        }
        public void EditProfile(Seller seller)
        {
         
            _context.Seller.Update(seller);
            _context.SaveChanges();
        }

        public Seller GetProfile(int  id)
        {
            return _context.Seller.Find(id);
        }
    }
}

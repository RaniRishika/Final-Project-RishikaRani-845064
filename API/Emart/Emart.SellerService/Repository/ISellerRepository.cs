using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repository
{
 public interface ISellerRepository
    {
        Seller GetProfile(int id);
        void EditProfile(Seller seller);
    }
}

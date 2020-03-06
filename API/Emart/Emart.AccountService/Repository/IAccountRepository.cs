using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repository
{
  public interface IAccountRepository
    {
        Seller LoginSeller(string uname, string pwd);
        Buyer LoginBuyer(string uname, string pwd);
         void RegisterBuyer(Buyer buyer);
        void RegisterSeller(Seller seller);

    }
}

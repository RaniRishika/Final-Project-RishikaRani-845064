using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Seller seller)
        {
            try
            {
                _repo.EditProfile(seller);
                 return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
       [HttpGet]
       [Route("GetProfile/{id}")]
       public IActionResult GetProfile(int id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
      }
}
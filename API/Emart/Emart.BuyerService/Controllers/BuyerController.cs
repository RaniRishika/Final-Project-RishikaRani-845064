using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetProfile/{bid}")]
        public IActionResult GetProfile(int bid)
        {
            try
            {
                return Ok(_repo.GetProfile(bid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Buyer buyer)
        {
            try
            {
                _repo.EditProfile(buyer);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory item)
        {
            try
            {
                _repo.BuyItem(item);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult SearchItems(string name)
        {
            try
            {
               return Ok( _repo.SearchItems(name));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("PurchaseHistory/{bid}")]
        public IActionResult PurchaseHistory(int bid)
        {
            try
            {
                return Ok(_repo.PurchaseHistory(bid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);

            }
        }
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {
                 return Ok(_repo.GetCategories());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{catid}")]
        public IActionResult GetSubCategories(int catid)
        {
            try
            {
                 return Ok(_repo.GetSubCategories(catid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
     }
}
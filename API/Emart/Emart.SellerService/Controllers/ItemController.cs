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
    public class ItemController : ControllerBase
    { 
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("ViewItems/{sid}")]
        public IActionResult ViewItems(int sid)
        {
           try
           {
           
            return Ok(_repo.ViewItems(sid));

            }
        catch(Exception e)
        {
            return NotFound(e.Message);
        }
       
       }

       [HttpPost]
       [Route("AddItems")]
       public IActionResult AddItem(Items item)
       {
        try
        {
          _repo.AddItem(item);
           return Ok();
        }
        catch(Exception e)
        {
            return NotFound(e.Message);
        }
        
        }

    [HttpGet]
    [Route("GetItem/{itemid}")]
    public IActionResult GetItem(int itemid)
    {
            try
            {
                return Ok(_repo.GetItem(itemid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
       
    }
    [HttpDelete]
    [Route("DeleteItem/{itemid}")]
    public IActionResult DeleteItem(int  itemid)
     {
         try
          {
             _repo.DeleteItem(itemid);
             return Ok();
          }
        catch (Exception e)
         {
           return NotFound(e.Message);
           }
        }
    [HttpPut]
    [Route("UpdateItem/{item}")]
    public IActionResult UpdateItem(Items item)
    {
       try
        {
            _repo.UpdateItem(item);
             return Ok();
          }
        catch (Exception e)
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
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{CatId}")]
        public IActionResult GetSubCategories(int CatId)
        {
            try
            {
                return Ok(_repo.GetSubCategories(CatId));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sid}/{SubCId}")]
        public IActionResult ViewItems(int sid,int SubCId)
        {
            try
            {

                return Ok(_repo.ViewItems(sid,SubCId));

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }

    }
}
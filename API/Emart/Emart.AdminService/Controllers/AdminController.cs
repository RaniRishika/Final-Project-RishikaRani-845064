using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AdminService.Models;
using Microsoft.AspNetCore.Authorization;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
          }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category category)
        {
            try
            {
                _repo.AddCategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.AddSubCategory(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
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
        [Route("GetProfile")]
        public IActionResult GetBuyerProfile()
        {
            try
            {
                return Ok(_repo.GetBuyerProfile( ));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        //sellerProfile
        [HttpGet]
        [Route("GetProfiles")]
        public IActionResult GetProfiles()
        {
            try
            {
                return Ok(_repo.GetProfiles());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        //get categories by id
        [HttpGet]
        [Route("GetCategoryById/{CatId}")]
        public IActionResult GetCategoryById(int CatId)
        {
            try
            {
                return Ok(_repo.GetCategoryById(CatId));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{CatId}")]
        public IActionResult DeleteCategory(int CatId)
        {
            try
            {
                _repo.DeleteCategory(CatId);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCategory/{SubCId}")]
        public IActionResult DeleteSubCategory(int SubCId)
        {
            try
            {
                _repo.DeleteSubCategory(SubCId);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("UpdateCategory/{category}")]
        public IActionResult UpdateCategory(Category category)
        {
            try
            {
                _repo.UpdateCategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository repo;
        private readonly IConfiguration configuration;

        public AccountController(IAccountRepository _repo,IConfiguration _config)
        {
            repo = _repo;
            configuration = _config;

        }

        [HttpGet]
        [Route("Login/{uname}/{pwd}/{user}")]
        public IActionResult Login(string uname, string pwd, string user)
        {
            try
            {
                if (user == "Seller")
                {
                    Seller seller = repo.LoginSeller(uname, pwd);
                    if (seller != null)
                    {
                        Token token = new Token() { sellerId = seller.Id, token = GenerateJwtToken(uname), msg = "Success" };
                        return Ok(token);
                    }
                    else
                    {
                        Token token = new Token() { msg = "Unscuccess" };
                        return Ok(token);
                    }
                }
                else if (user == "Buyer")
                {
                    Buyer buyer = repo.LoginBuyer(uname, pwd);
                    if (buyer != null)
                    {
                        Token token = new Token() { buyerId = buyer.Id, token = GenerateJwtToken(uname), msg = "Success" };
                        return Ok(token);
                    }
                    else
                    {
                        Token token = new Token() { msg = "Unsuccess" };
                        return Ok(token);

                    }
                }
                else
                {
                    Token token = new Token() { msg = "Unsuccess" };
                    return Ok(token);
                }
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        
            }

        [HttpPost]
        [Route("RegisterBuyer")]
        public IActionResult RegisterBuyer(Buyer buyer)
        {
           try
            {
                repo.RegisterBuyer(buyer);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }

       
        [HttpPost]
        [Route("RegisterSeller")]

        public IActionResult RegisterSeller(Seller seller)
        {
            try
            {
                repo.RegisterSeller(seller);
                return Ok();
               
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }

        }
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration["Jwt:JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["Jwt:JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["Jwt:JwtIssuer"],
                configuration["Jwt:JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
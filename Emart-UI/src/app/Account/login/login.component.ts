import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AccountService]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  token:Token;
  
  constructor(private fromBuilder:FormBuilder,private service:AccountService,private route:Router) { }

  ngOnInit() {
    this.loginForm=this.fromBuilder.group({
      username:[''],
      password:[''],
      user:['']
    });
  }
  
  get f()
  {
    return this.loginForm.controls;

  }
  onSubmit() {
    this.submitted = true;
    if(this.loginForm.valid)
    {
      this.Login();
    }
    
}

 Login()
 {
   let username=this.loginForm.value['username'];
   let password=this.loginForm.value['password'];
   let user=this.loginForm.value['user'];
   console.log(username+" "+password+" "+user);
   if(user=="Admin"&& username=="Admin"&&password=="12345")
   {
     this.route.navigateByUrl('/Admin');
   }
   else{
    
    this.service.Login(username,password,user).subscribe(res=>{
      this.token=res;
      if(this.token.msg=="Success" && this.token.sellerId!=0)
      {
        this.route.navigateByUrl('/Seller');
        localStorage.setItem('sellerId',this.token.sellerId.toString());
        localStorage.setItem('token',this.token.token);
        console.log(this.token);
      }
      else if(this.token.msg=="Success" && this.token.buyerId!=0){
        this.route.navigateByUrl('/Buyer');
        localStorage.setItem('buyerId',this.token.buyerId.toString());
        localStorage.setItem('token',this.token.token);
        console.log(this.token);
      }
      else{
        alert("Invaild User");
      }
    },
    err=>{
      console.log(err);
    })
 }
 }
}

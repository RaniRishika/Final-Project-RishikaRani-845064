import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import {Buyer} from 'src/app/Models/buyer';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css'],
  providers:[AccountService]
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  buyer:Buyer;
  constructor(private fromBuilder:FormBuilder,private service:AccountService) {

   }
  ngOnInit() {
     this.registerForm=this.fromBuilder.group({
      id:[''],
      username:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,6}$')]],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      CreatedDateTime:[''],
        });
  }
  get f()
  {
    return this.registerForm.controls;

  }
  onSubmit() {
        this.submitted = true;
        this.AddBuyer()
    }
  onReset() {
         this.submitted = false;
        this.registerForm.reset();
     }
    
 AddBuyer()
   {
      this.buyer=new Buyer();
      this.buyer.id= Math.floor(Math.random()*1000);
      this.buyer.username=this.registerForm.value['username'];
      this.buyer.password=this.registerForm.value['password'];
      this.buyer.email=this.registerForm.value['email'];
      this.buyer.mobile=this.registerForm.value['mobile'];
      this.buyer.createdDateTime=new Date();
      console.log(this.buyer);
      this.service.RegisterBuyer(this.buyer).subscribe(res=>{
      console.log('Record Added')
           },err=>{
          console.log(err)
           })
    }
       
 }

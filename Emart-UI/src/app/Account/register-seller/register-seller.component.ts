import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import {Seller} from 'src/app/Models/seller';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css'],
  providers:[AccountService]
})
export class RegisterSellerComponent implements OnInit {
  registerForm:FormGroup;
  submitted:boolean=false;
  seller:Seller;

  constructor(private fromBuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.registerForm=this.fromBuilder.group({
      id:[''],
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      companyName:['',Validators.required],
      gstin:['',Validators.required],
      abtCompany:[''],
      postaladdress:[''],
      compWebsite:['',Validators.required],
    });
  }
  get f()   {
  return this.registerForm.controls;   }
  onSubmit() {
         this.submitted = true;
         if(this.registerForm.valid)
         {
          this.AddSeller()
  
         }
           }
  onReset() {
          this.submitted = false;
     this.registerForm.reset();
      }
    
 AddSeller() 
    {
      this.seller=new Seller();
      this.seller.id=Math.floor(Math.random()*1000);
      this.seller.username=this.registerForm.value['username'];
      this.seller.password=this.registerForm.value['password'];
      this.seller.email=this.registerForm.value['email'];
      this.seller.contact=this.registerForm.value['contact'];
      this.seller.companyName=this.registerForm.value['companyName'];
      this.seller.gstin=this.registerForm.value['gstin'];
      this.seller.abtcompany=this.registerForm.value['abtCompany'];
      this.seller.postalAddress=this.registerForm.value['postaladdress'];
      this.seller.compWebsite=this.registerForm.value['compWebsite'];
      console.log(this.seller);
      this.service.RegisterSeller(this.seller).subscribe(res=>{
      console.log('Record Added')
           },err=>{
          console.log(err)
           })
    }
       
 }

       

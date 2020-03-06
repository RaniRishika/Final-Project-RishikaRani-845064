import { Component, OnInit } from '@angular/core';
import {SellerService} from 'src/app/Services/seller.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Seller} from 'src/app/Models/seller';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
  providers:[SellerService]
})
export class ViewProfileComponent implements OnInit {
  sellerForm:FormGroup;
  submitted=false;
  seller:Seller;
  seller1:Seller;
  pwd:string;

  constructor(private builder:FormBuilder,private service:SellerService) { }

  ngOnInit(){
  this.sellerForm=this.builder.group({
      
      username:[''],
      email:[''],
      contact:[''],
      companyName:[''],
      gstin:[''],
      abtCompany:[''],
      postaladdress:[''],
      compWebsite:[''],
    });
    this.Get();

  }
  
    Get():void

    {
      this.sellerForm.disable();
      this.seller=new Seller();
      this.service.GetSeller(Number(localStorage.getItem('sellerId'))).subscribe(res=>{
      this.seller=res;
      this.pwd=this.seller.password;
      console.log(this.seller);
      this.sellerForm.setValue({
      username:this.seller.username,
      email:this.seller.email,
      contact:this.seller.contact,
      companyName:this.seller.companyName,
      gstin:this.seller.gstin,
      abtCompany:this.seller.abtcompany,
      postaladdress:this.seller.postalAddress,
      compWebsite:this.seller.compWebsite,
        })
        },err=>{
       console.log(err)
        })
  }

    
       
 UpdateSeller() 
 {
   this.seller1=new Seller();
   this.seller1.id=Number(localStorage.getItem('sellerId'));
   this.seller1.password=this.pwd;
   this.seller1.username=this.sellerForm.value['username'];
   this.seller1.email=this.sellerForm.value['email'];
   this.seller1.contact=this.sellerForm.value['contact'];
   this.seller1.companyName=this.sellerForm.value['companyName'];
   this.seller1.gstin=this.sellerForm.value['gstin'];
   this.seller1.abtcompany=this.sellerForm.value['abtCompany'];
   this.seller1.postalAddress=this.sellerForm.value['postaladdress'];
   this.seller1.compWebsite=this.sellerForm.value['compWebsite'];
   console.log(this.seller1);
   this.service.UpdateSeller(this.seller1).subscribe(res=>{
   console.log('Record Updated')
   this.Get();
        },err=>{
       console.log(err)
        })
        
        
  }
  Edit()
  {
    this.sellerForm.enable();
  }
}


    


       


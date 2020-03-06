import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
  providers:[BuyerService]
})
export class BuyerViewProfileComponent implements OnInit {
  submitted=false;
  buyerForm:FormGroup;
  buyer:Buyer;
  buyer1:Buyer;
date:Date;
pwd:string;
  constructor(private builder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    this.buyerForm=this.builder.group({
       username:[''],
       email:[''],
       mobile:[''],
      });
      this.Get();

  }
  Get():void
  {
    this.buyerForm.disable();
    this.buyer=new Buyer();
      this.service.GetBuyer(Number(localStorage.getItem('buyerId'))).subscribe(res=>{
      this.buyer=res;
      this.date=this.buyer.createdDateTime;
      this.pwd=this.buyer.password;
      this.buyerForm.setValue({
      username:this.buyer.username,
      email:this.buyer.email,
      mobile:this.buyer.mobile,
        } )
        },err=>{
       console.log(err)
        })
  }
  UpdateBuyer() 
 {
   this.buyer1=new Buyer();
   this.buyer1.id=Number(localStorage.getItem('buyerId'));
   this.buyer1.createdDateTime=this.date;
   this.buyer1.password=this.pwd;
   this.buyer1.username=this.buyerForm.value['username'];
   this.buyer1.email=this.buyerForm.value['email'];
   this.buyer1.mobile=this.buyerForm.value['mobile'];
   console.log(this.buyer1);
   this.service.UpdateBuyer(this.buyer1).subscribe(res=>{
   console.log('Record Updated')
   this.Get();
        },err=>{
       console.log(err)
        })
  }
  Edit()
  {
    this.buyerForm.enable();
  }

}

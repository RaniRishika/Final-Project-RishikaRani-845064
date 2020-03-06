import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import {Seller} from 'src/app/Models/seller';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'app-block-unblock-seller',
  templateUrl: './block-unblock-seller.component.html',
  styleUrls: ['./block-unblock-seller.component.css'],
  providers:[AdminService]
})
export class BlockUnblockSellerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  seller:Seller;


  constructor(private fromBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() { this.Get();
  }
  Get()
  {
    this.service.GetProfiles().subscribe(res=>{
      this.seller=res;
      console.log(this.seller);

    })
  }
}
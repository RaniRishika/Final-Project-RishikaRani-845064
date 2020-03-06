import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AdminService} from 'src/app/Services/admin.service';
import{Buyer} from 'src/app/Models/buyer';

@Component({
  selector: 'app-block-unblock-buyer',
  templateUrl: './block-unblock-buyer.component.html',
  styleUrls: ['./block-unblock-buyer.component.css'],
  providers:[AdminService]
})
export class BlockUnblockBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  buyer:Buyer[];
  constructor(private fromBuilder:FormBuilder,private service:AdminService) { }


 ngOnInit() { this.Get();
  }
  Get()
  {
    this.service.GetBuyerProfile().subscribe(res=>{
      this.buyer=res;
      console.log(this.buyer);

    })
  }


}


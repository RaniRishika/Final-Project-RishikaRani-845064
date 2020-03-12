import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';
import{Items} from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/Models/purchaseHistory';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
purch:Purchase[];
buyerForm:FormGroup;
items:Items[];
item:Items;
buyerId:number;
i:number;
  constructor(private service:BuyerService,private builder:FormBuilder) {
  this.buyerId=Number(localStorage.getItem('buyerId'));
  this.items=[];
    this.PurchaseHistory();
   }

  ngOnInit() {
    this.buyerForm=this.builder.group({
      buyerId:[''],
      sellerId:[''],
     transType:[''],
     itemId:[''],
   noOfItems:[''],
     dateTime:[''],
    remarks:['']
    });
     
  }
  PurchaseHistory()
{
 
this.service.PurchaseHistory(this.buyerId).subscribe(res=>{
this.purch=res;
console.log(this.purch);
for(let i=0;i<this.purch.length;i++)
{
this.service.GetItem(this.purch[i].itemId).subscribe(res1=>{

this.item=res1;
console.log(this.item);
this.items.push(this.item);
  console.log(this.items);
})
}
console.log(this.purch);
  })

}

}

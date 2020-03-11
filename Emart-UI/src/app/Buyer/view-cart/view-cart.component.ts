import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';
import{Items} from 'src/app/Models/items';
import { Cart } from 'src/app/Models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  providers:[BuyerService]
})
export class ViewCartComponent implements OnInit {
  submitted=false;
  buyerForm:FormGroup;
  buyer:Buyer;
  cart:Cart;
  item:Items;
  item1:Items;
  cartlist:Cart[];
  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) {
  this.ViewCart();
   }

  ngOnInit() {
    this.buyerForm=this.builder.group({
      cartId:[''],
      itemName:[''],
      itemDesp:[''],
      price:[''],
      image:[''],
      buyerId:[''],
      itemId:['']
      })
  }

   ViewCart( )
   { 
     this.cart=new Cart();
     let buyerId=Number(localStorage.getItem('buyerId'));
     this.service.ViewCart(buyerId).subscribe(res=>{
     this.cartlist=res;
        console.log(this.cartlist);
         },err=>{
        console.log(err)
        })
     }
     Delete(cardId:number)
     {
        this.service.DeleteCart(cardId).subscribe(res=>{
        console.log("record deleted");
        this.ViewCart();
      })
     }
     BuyItem(itemId:number)
     {
       this.service.GetItem(itemId).subscribe(res=>{
       this.item=res;
       console.log(this.item);
       localStorage.setItem('item',JSON.stringify(this.item));
      },err=>{
      console.log(err)
    })
      this.route.navigateByUrl('/Buyer/BuyProducts');
     }

}


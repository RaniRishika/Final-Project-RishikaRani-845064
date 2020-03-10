import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';
import{Items} from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[BuyerService]
})
export class SearchComponent implements OnInit {
  submitted=false;
  buyerForm:FormGroup;
  buyer:Buyer;
  itemName:string;
  image:string;
  item:Items;
  cart:Cart;
  s:number;
  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
    this.buyerForm=this.builder.group({
      itemName:[''],
      itemDesp:[''],
      price:[''],
      image:[''],
      itemId:[''],
     })
  }
  onSubmit() {
    this.submitted = true;
    this.Search();
}
  Search()
  {
    this.itemName=this.buyerForm.value['itemName'];
    this.service.SearchItems(this.itemName).subscribe(res=>{
    this.item=res;
    console.log(this.item);
  },err=>{
    console.log(err)
     })
   }
   BuyProduct(item:Items)
   {
     localStorage.setItem('item',JSON.stringify(item));
     this.route.navigateByUrl('/Buyer/BuyProducts');
   }
   AddCart(item:Items)
   {
     this.cart=new Cart();
     this.cart.buyerId=Number(localStorage.getItem('buyerId'));
     this.cart.cartId=Math.floor(Math.random()*1000);
     this.cart.itemId=item.itemId;
     this.cart.image=item.image;
     this.cart.itemName=item.itemName;
     this.cart.itemDesp=item.itemDesp;
     this.cart.price=item.price;
     console.log(this.cart);
     this.service.AddCart(this.cart).subscribe(res=>{
       console.log("Item added to cart");
       this.cart=res;
       console.log(this.cart);
     },err=>{
       console.log(err)
       })
    }
  GetCart(item:Items)
  {
    let itemId=item.itemId;
    this.service.GetCart(itemId).subscribe(res=>
      {
        this.s=res;
        if(this.s!=0)
         alert("already added");
         else
          {
            this.cart=new Cart();
            this.cart.buyerId=Number(localStorage.getItem('buyerId'));
            this.cart.cartId=Math.floor(Math.random()*1000);
            this.cart.itemId=item.itemId;
            this.cart.image=item.image;
            this.cart.itemName=item.itemName;
            this.cart.itemDesp=item.itemDesp;
            this.cart.price=item.price;
            console.log(this.cart);
            this.service.AddCart(this.cart).subscribe(res=>{
              console.log("Item added to cart");
              this.cart=res;
              console.log(this.cart);
            },err=>{
              console.log(err)
              })
          }
      }
      )
  }
     
  }

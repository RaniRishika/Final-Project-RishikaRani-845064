import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';
import { Purchase } from 'src/app/Models/purchaseHistory';
import { Items } from 'src/app/Models/items';


@Component({
  selector: 'app-buy-products',
  templateUrl: './by-products.component.html',
  styleUrls: ['./by-products.component.css'],
  providers:[BuyerService]
})
export class BuyProductsComponent implements OnInit {
  submitted=false;
  buyerForm:FormGroup;
  buyer:Buyer;
  purchaseHistory:Purchase;
  item:Items;
  price:number;

  load:boolean=false;


  constructor(private builder:FormBuilder,private service:BuyerService) { 
  this.item=JSON.parse(localStorage.getItem('item'));
  }

  ngOnInit() {
    this.buyerForm=this.builder.group({
      itemName:[''],
      price:[''],
      itemDesp:[''],
      transType:[''],
      noOfItems:[''],
      dateTime:[''],
      nameOnCard:['',Validators.required],
      cvv:['',Validators.required],
      cardNumber:['',Validators.required],
     
       });
 }
 onSubmit() {
  this.submitted = true;
  this.BuyProduct();
  }
 
   
get f()
  {
    return this.buyerForm.controls;

  }
BuyProduct()
  {
    console.log('buyproducts running');
    this.purchaseHistory=new Purchase();
    this.purchaseHistory.buyerId=Number(localStorage.getItem('buyerId'));
    this.purchaseHistory.sellerId=Number(localStorage.getItem('sellerId'));
    this.purchaseHistory.itemId=Math.floor(Math.random()*1000);
    this.purchaseHistory.id=Math.floor(Math.random()*1000);
    this.purchaseHistory.dateTime=new Date();
    this.purchaseHistory.remarks=this.item.remarks;
    this.purchaseHistory.noOfItems=this.buyerForm.value['noOfItems'];
    this.purchaseHistory.transType=this.buyerForm.value['transType'];
    this.service.BuyItem(this.purchaseHistory).subscribe(res=>{
    this.purchaseHistory=res;
    console.log(this.purchaseHistory);
     },err=>{
    console.log(err)
     })

  }
  changeAmount()
  {
     this.price=this.item.price*this.buyerForm.value['noOfItems'];
  }
  display()
  {
    let transType=this.buyerForm.value['transType'];
    if(transType=='Card')
         this.load=true;
    else
     this.load=false;
     }

 }

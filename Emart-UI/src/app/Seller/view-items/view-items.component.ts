import { Component, OnInit } from '@angular/core';
import {SellerService} from 'src/app/Services/seller.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Items} from 'src/app/Models/items';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css'],
  providers:[SellerService]
})
export class ViewItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  item:Items;
  category:Category;
  subcategory:SubCategory;

  constructor(private builder:FormBuilder,private service:SellerService) { }
  ngOnInit() {
    this.itemForm=this.builder.group({
      itemName:['',[Validators.required,Validators.pattern('^[A-Za-z]*')]],
      itemDesp:[''],
      price:[''],
      catName:[''],
      subCName:[''],
      remarks:[''],
      catId:[''],
   });
  this.GetCategory();
 }
 get f()
 {
   return this.itemForm.controls;

 }
 onSubmit() {
       this.submitted = true;
       if(this.itemForm.valid)
       {
       this.GetItem();
       }
         }
 onReset() {
        this.submitted = false;
       this.itemForm.reset();
    }
    GetCategory()
  {
    this.service.GetCategories().subscribe(res=>{
      this.category=res;
      console.log(this.category);

    })
  }
  GetSubCategory()
  {
    let catId=this.itemForm.value['catName'];
    this.service.GetSubCategories(catId).subscribe(res=>{
      this.subcategory=res;
      console.log(this.subcategory);

    })
  }
  GetItem()
  {
    let catid=Number(this.itemForm.value["catName"]);
    let subcid=Number(this.itemForm.value["subCName"]);
    this.service.ViewItems(Number(localStorage.getItem('sellerId')),subcid).subscribe(res=>{
    this.item=res;
    console.log(this.item);
  },err=>{
    console.log(err)
     })
  }
  Delete(itemId:number)
  {
    this.service.DeleteItem(itemId).subscribe(res=>{
    this.item=res;
      console.log(this.item);
      this.GetItem();
        })
      }
}

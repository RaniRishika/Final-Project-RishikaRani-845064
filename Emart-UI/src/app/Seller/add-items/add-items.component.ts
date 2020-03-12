import { Component, OnInit } from '@angular/core';
import {SellerService} from 'src/app/Services/seller.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Items} from 'src/app/Models/items';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
  providers:[SellerService]
})
export class AddItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  item:Items;
  name:string;
  image:string;
  category:Category;
  subcategory:SubCategory;
  selectedFile : File = null;

 constructor(private builder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.itemForm=this.builder.group({
      itemId:[''],
      catName:['',[Validators.required]],
      subCName:['',[Validators.required]],
      price:['',[Validators.required]],
      itemName:['',[Validators.required,Validators.pattern('^[A-Za-z]*')]],
      itemDesp:[''],
      stockNo:[''],
      remarks:[''],
      catId:[''],
      image:['']
      
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
       this.AddItem();
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
    console.log(catId);
    this.service.GetSubCategories(catId).subscribe(res=>{
      this.subcategory=res;
      console.log(this.subcategory);

    })
  }
   
AddItem()
  {

     this.item=new Items();
     this.item.catid=Number(this.itemForm.value["catName"]);
     this.item.subcid=Number(this.itemForm.value["subCName"]);
     this.item.itemId=Math.floor(Math.random()*1000);
     this.item.sellerid=Number(localStorage.getItem('sellerId'));
     this.item.stockno=Math.floor(Math.random()*1000);
     this.item.price=this.itemForm.value['price'];
     this.item.itemName=this.itemForm.value['itemName'];
     this.item.itemDesp=this.itemForm.value['itemDesp'];
     this.item.remarks=this.itemForm.value['remarks'];
    this.item.image=this.image;
     console.log(this.item);
     console.log(this.item.catid);
     console.log(this.item.subcid);
     this.service.AddItem(this.item).subscribe(res=>{
     console.log('Item Added')
          },err=>{
         console.log(err)
          })
   }
   fileEvent(event){
     this.image = event.target.files[0].name;
 }
      
}

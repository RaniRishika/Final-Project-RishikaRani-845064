import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AdminService} from 'src/app/Services/admin.service';
import {SubCategory} from  'src/app/Models/sub-category';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css'],
  providers:[AdminService]

})
export class AddSubCategoryComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  category:Category[];
 subcategory:SubCategory;


  constructor(private fromBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
     this.registerForm=this.fromBuilder.group({     
        subCId:[''],
        catName:[''],
        subCName:[''],
        catId:[''],
        briefSubCdetails:[''],
        gst:[''],
        });
        this.Get();
      }
   get f()
     {
      return this.registerForm.controls;
         }
 onSubmit() {     
      this.submitted = true;
      if(this.registerForm.valid)
      {
     this.AddSubCategory();
      }
      }
  onReset() {
         this.submitted = false;
        this.registerForm.reset();
     }
     Get()
     {
       this.service.GetCategories().subscribe(res=>{
         this.category=res;
         console.log(this.category);

       })
     }
   AddSubCategory()
     {
        this.subcategory=new SubCategory();
        this.subcategory.subCId=Math.floor(Math.random()*1000);
        this.subcategory.catId=Number(this.registerForm.value['catName']);
        this.subcategory.subCName=this.registerForm.value['subCName'];
        this.subcategory.briefSubCdetails=this.registerForm.value['briefSubCdetails'];
        this.subcategory.gst=this.registerForm.value['Gst'];
   console.log(this.subcategory);
  this.service.AddSubCategory(this.subcategory).subscribe(res=>{      
    console.log('SubCategory Added')
         },err=>{
           console.log(err)
                  })
    }
      

}

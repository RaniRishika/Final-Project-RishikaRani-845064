import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AdminService} from 'src/app/Services/admin.service';
import {SubCategory} from  'src/app/Models/sub-category';
import { Category } from 'src/app/Models/category';


@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css'],
  providers:[AdminService]
})
export class ViewSubCategoryComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  category:Category[];
 subcategory:SubCategory;



  constructor(private fromBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.registerForm=this.fromBuilder.group({
      SubCName:[''],
      Gst:[''],
      BriefSubCdetails:[''],
      catName:['']
      });

    this.GetCategory();
  
  }
  get f()
  {
    return this.registerForm.controls;
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
    let catId=Number(this.registerForm.value["catName"]);
    this.service.GetSubCategories(catId).subscribe(res=>{
    this.subcategory=res;
    console.log(this.subcategory);
  },err=>{
    console.log(err)
     })
}
Delete(subCId:number)
  {
    this.service.DeleteSubCategory(subCId).subscribe(res=>{
      console.log("record deleted");
      this.GetSubCategory();
    })

  }
  }

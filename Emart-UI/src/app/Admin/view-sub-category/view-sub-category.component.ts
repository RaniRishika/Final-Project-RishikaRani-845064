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
 subcategory:SubCategory[];
subcat:SubCategory;
id:number;
catId:number;
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
  onSubmit() {
    this.submitted = true;
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
GetSubCategoryById(SubCId:number)
{
    this.service.GetSubCategoryById(SubCId).subscribe(res=>{
    this.subcat=res;
    this.id=this.subcat.subCId;
    this.catId=this.subcat.catId;

    console.log(this.subcat);
    this.registerForm.setValue({
      SubCName:this.subcat.subCName,
      Gst:this.subcat.gst,
      BriefSubCdetails:this.subcat.briefSubCdetails,
      catName:""

    });

  })
}
Update()
{
  this.subcat=new SubCategory();
  this.subcat.subCId=this.id;
  this.subcat.catId=this.catId;
  this.subcat.subCName=this.registerForm.value['SubCName'],
   this.subcat.gst=this.registerForm.value['Gst'],
  this.subcat.briefSubCdetails=this.registerForm.value['BriefSubCdetails'],
  console.log(this.subcat);
  this.service.UpdateSubCategory(this.subcat).subscribe(res=>{
    console.log("updated");
    this.GetSubCategory();
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

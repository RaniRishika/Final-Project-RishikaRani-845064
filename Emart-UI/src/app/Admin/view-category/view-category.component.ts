import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AdminService} from 'src/app/Services/admin.service';
import {Category} from 'src/app/Models/category';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
  providers:[AdminService]
})
export class ViewCategoryComponent implements OnInit {
  adminForm:FormGroup;
  submitted=false;
  category:Category[];
  cat:Category;


  constructor(private fromBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.adminForm=this.fromBuilder.group({
      catName:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,25}$')]],
      briefDetails:[''],
    });
    this.Get();

  }
  onSubmit() {
    this.submitted = true;
  }
  get f()
 {
   return this.adminForm.controls;

 }
  Get()
  {
    this.service.GetCategories().subscribe(res=>{
      this.category=res;
      console.log(this.category);

    })
  }
  GetCategoryById(catId:number)
  {
      this.service.GetCategoryById(catId).subscribe(res=>{
      this.cat=res;
      this.cat.catId=catId;
      console.log(this.cat);
      this.adminForm.setValue({
        catName:this.cat.catName,
        briefDetails:this.cat.briefDetails,

      });

    })
  }
  Update()
  {
    this.cat.catName=this.adminForm.value['catName'],
    this.cat.briefDetails=this.adminForm.value['briefDetails'],
    console.log(this.cat);
    this.service.UpdateCategory(this.cat).subscribe(res=>{
      console.log("updated");
      this.Get();
    },err=>{
      console.log(err)
    })
  }
  
  Delete(catId:number)
  {
    this.service.DeleteCategory(catId).subscribe(res=>{
      console.log("record deleted");
      this.Get();
    })

  }

}

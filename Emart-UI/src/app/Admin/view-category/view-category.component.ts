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
      catId:[''],
      catName:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,25}$')]],
      briefDetails:[''],
    });
    this.Get();
    // this.GetCategoryById( );
    // this.Update();

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
  // GetCategoryById( )
  // {
  //     this.cat.catId=this.adminForm.value['catId'],
  //     this.service.GetCategoryById().subscribe(res=>{
  //     this.category=res;
  //     console.log(this.category);
  //   })
  // }
  // Update()
  // {
  //   this.cat.catName=this.adminForm.value['catName'],
  //   this.cat.briefDetails=this.adminForm.value['briefDetails'],
  //     this.service.UpdateCategory(this.cat).subscribe(res=>{
  //     this.cat=res;
  //     console.log(this.cat);
  //   })
    
  // }
  Delete(catId:number)
  {
    this.service.DeleteCategory(catId).subscribe(res=>{
      console.log("record deleted");
      this.Get();
    })

  }

}

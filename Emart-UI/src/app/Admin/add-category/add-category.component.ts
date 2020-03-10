import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AdminService} from 'src/app/Services/admin.service';
import {Category} from 'src/app/Models/category';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers:[AdminService]
})
export class AddCategoryComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  load:boolean;
  category:Category;
  cat:Category[];


  constructor(private fromBuilder:FormBuilder,private service:AdminService,private router:Router) { }

  ngOnInit() {
    this.registerForm=this.fromBuilder.group({
      catId:[''],
      catName:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,25}$')]],
      briefDetails:[''],

       });
 }
 get f()
 {
   return this.registerForm.controls;

 }
 onSubmit() {
       this.submitted = true;
       if(this.registerForm.valid)
       {
       this.AddCategory()
       }
         }
 onReset() {
        this.submitted = false;
       this.registerForm.reset();
    }
   
AddCategory()
  {
     this.category=new Category();
     this.category.catId=Math.floor(Math.random()*1000);
     this.category.catName=this.registerForm.value['catName'];
     this.category.briefDetails=this.registerForm.value['briefDetails'];
     console.log(this.category);
     this.service.GetCategoryByName(this.category.catName).subscribe(res=>{
      this.cat=res;
      console.log(this.cat);
      if(!this.cat)
    {
      this.load=false;
    this.service.AddCategory(this.category).subscribe(res=>{
      console.log("record added");
      this.router.navigateByUrl('/Admin/ViewCategory');
    },err=>{
      console.log(err)
    })
  }
  else{
    this.load=true;
    alert("already exist");
  }
  })
      
}
}

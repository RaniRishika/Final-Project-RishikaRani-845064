import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';
import{Items} from 'src/app/Models/items';
import { Router } from '@angular/router';


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

  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
    this.buyerForm=this.builder.group({
      itemName:['']

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
     
   }

}

import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Buyer} from 'src/app/Models/buyer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {

  constructor(private route:Router) { 
    if(!localStorage.getItem('buyerId'))
      this.route.navigateByUrl('/Home/Login');
  }

  ngOnInit() {
  }
  logout()
  {
    console.log('logout successfully');
    localStorage.removeItem('buyerId');
   
  }
  
}

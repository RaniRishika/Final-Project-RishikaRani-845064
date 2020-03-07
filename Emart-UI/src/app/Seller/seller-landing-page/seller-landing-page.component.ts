import { Component, OnInit } from '@angular/core';
import {SellerService} from 'src/app/Services/seller.service';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import{Seller} from 'src/app/Models/seller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {

  constructor(private route:Router) { 
    if(!localStorage.getItem('sellerId'))
    this.route.navigateByUrl('/Home/Login');
  }

  ngOnInit() {
  }
  logout()
  {
    console.log('logout successfully');
    localStorage.removeItem('sellerId');

  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AdminService} from 'src/app/Services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private route:Router) {
    if(!localStorage.getItem('Admin'))
    this.route.navigateByUrl('/Home/Login');
   }

  ngOnInit() {
  }
  logout()
  {
    console.log('Logout successfully');
    localStorage.removeItem('Admin');

  }

}

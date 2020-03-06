import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "Rxjs";
import { Buyer} from '../Models/buyer';
import{Seller} from '../Models/seller';


const  Requestheaders={headers:new HttpHeaders({
  'content-type' :'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string='http://localhost:64939/api/Account'

  constructor(private http:HttpClient) { }
  public RegisterBuyer(buyer:Buyer) : Observable<any>
  {
    return this.http.post<any>(this.url+'/RegisterBuyer',buyer,Requestheaders);
  }
  public RegisterSeller(seller:Seller) : Observable<any>
  {
      return this.http.post<any>(this.url+'/RegisterSeller',seller,Requestheaders);
  }
  public Login(uname:string,password:string,user:string):Observable<any>
  {
    return this.http.get<any>(this.url+'/Login/'+uname+'/'+password+'/'+user,Requestheaders);
  }
}

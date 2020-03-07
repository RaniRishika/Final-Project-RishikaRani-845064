import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "Rxjs";
import {Buyer} from '../Models/buyer';
import { Items } from '../Models/items';
import{Purchase} from '../Models/purchaseHistory';
import{Cart} from'../Models/cart';
const  Requestheaders={headers:new HttpHeaders({
  'content-type' :'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:64939/api/Buyer'

  constructor(private http:HttpClient) { }
  public GetBuyer(buyerid:number):Observable<any>
  {
    return this.http.get(this.url+'/GetProfile/'+buyerid,Requestheaders);
  }
  public UpdateBuyer(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'/EditProfile/',buyer,Requestheaders);
  }
  public SearchItems(itemName:string):Observable<any>
  {
    return this.http.get<any>(this.url+'/SearchItems/'+itemName,Requestheaders);
  }
  public BuyItem(purchaseHistory:Purchase):Observable<any>
  {
    // console.log(purchaseHistory);
    return this.http.post<any>(this.url+'/BuyItem',purchaseHistory,Requestheaders);
  }
  public AddCart(cart:Cart):Observable<any>
  {
    return this.http.post<any>(this.url+'/AddCart',cart,Requestheaders);
  }
  public ViewCart(buyerId:number):Observable<any>
  {
    return this.http.get<any>(this.url+'/ViewCart/'+buyerId,Requestheaders);
  }
  public DeleteCart(cartId:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'/DeleteCart/'+cartId,Requestheaders);
  }
  public GetItem(itemId:number):Observable<any>
  {
    return this.http.get<any>(this.url+'/GetItem/'+itemId,Requestheaders);
  }
}

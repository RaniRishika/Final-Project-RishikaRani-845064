import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "Rxjs";
import{Items} from '../Models/items';
import {Seller} from '../Models/seller';
const  Requestheaders={headers:new HttpHeaders({
  'content-type' :'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:64939/api/Item'
  url1:string='http://localhost:64939/api/seller'

  constructor(private http:HttpClient) { }
  public AddItem(item:Items) : Observable<any>
  {
    return this.http.post<any>(this.url+'/AddItems/',item,Requestheaders);
  }
  public GetCategories():Observable<any>
  {
    return this.http.get(this.url+'/GetCategories',Requestheaders);
  }
  public  GetSubCategories(catId:number):Observable<any>
  {
    return this.http.get(this.url+'/GetSubCategory/'+catId,Requestheaders);
  }
  public ViewItems(sellerid:number,SubCId:Number):Observable<any>
  {
    return this.http.get(this.url+'/ViewItems/'+sellerid+'/'+SubCId,Requestheaders);
  }
  public DeleteItem(itemId:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'/DeleteItem/'+itemId,Requestheaders);
  }
  public GetItem(itemId:number) :Observable<any>
  {
    return this.http.get(this.url+'/GetItem/'+itemId,Requestheaders);
  }
  public GetSeller(sellerid:number):Observable<any>
  {
    return this.http.get(this.url1+'/GetProfile/'+sellerid,Requestheaders);
  }
  public UpdateSeller(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url1+'/EditProfile/',seller,Requestheaders);
  }
 
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "Rxjs";
import{Category} from '../Models/category';
import{SubCategory} from '../Models/sub-category';
const  Requestheaders={headers:new HttpHeaders({
  'content-type' :'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:64939/api/Admin'
  

  constructor(private http:HttpClient) {}
  public AddCategory(category:Category) : Observable<any>
  {
    return this.http.post<any>(this.url+'/AddCategory',category,Requestheaders);
  }
  public AddSubCategory(subcategory:SubCategory) : Observable<any>
  {
    return this.http.post<any>(this.url+'/AddSubCategory',subcategory,Requestheaders);
  }
  public GetCategories():Observable<any>
  {
    return this.http.get(this.url+'/GetCategories',Requestheaders);
  }
  public  GetSubCategories(catId:number):Observable<any>
  {
    return this.http.get(this.url+'/GetSubCategory/'+catId,Requestheaders);
  }
 public GetBuyerProfile( ):Observable<any>
 {
   return this.http.get(this.url+'/GetProfile/',Requestheaders);
 }
 public GetProfiles():Observable<any>
 {
   return this.http.get(this.url+'/GetProfiles/',Requestheaders);
 }
 public GetCategoryById(catId:number):Observable<any>
 {
   return this.http.get(this.url+'/GetCategoryById/'+catId,Requestheaders);
 }
 public UpdateCategory(cat:Category) : Observable<any>
 {
   return this.http.put<any>(this.url+'/UpdateCategory',cat,Requestheaders);
 }
 public DeleteCategory(catId:number): Observable<any>
 {
   return this.http.delete<any>(this.url+'/DeleteCategory/'+catId,Requestheaders);
 }
 public DeleteSubCategory(subCId:number): Observable<any>
 {
   return this.http.delete<any>(this.url+'/DeleteSubCategory/'+subCId,Requestheaders);
 }

}

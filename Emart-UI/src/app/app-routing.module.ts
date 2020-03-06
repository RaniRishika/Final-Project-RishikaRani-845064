import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { BuyerViewProfileComponent } from './Buyer/Buyer-view-profile/view-profile.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import {BuyProductsComponent} from './Buyer/buy-products/by-products.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { HomeComponent } from './Account/home/home.component';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategoryComponent } from './Admin/view-sub-category/view-sub-category.component';


const routes: Routes = [
  {path:'Seller',component:SellerLandingPageComponent,children:[
    {path:'AddItems',component:AddItemsComponent},
    {path:'ViewItems',component:ViewItemsComponent},
    {path:'ViewProfile',component:ViewProfileComponent},
    {path:'ViewReports',component:ViewReportsComponent}
      ]},
    {path:'Buyer',component:BuyerLandingPageComponent,children:[
      {path:'Search',component:SearchComponent},
      {path:'PurchaseHistory',component:PurchaseHistoryComponent},
      {path:'BuyerViewProfile',component:BuyerViewProfileComponent},
      {path:'BuyProducts',component:BuyProductsComponent},
      {path:'ViewCart',component:ViewCartComponent}
      ]},
      {path:'Admin',component:AdminLandingPageComponent,children:[
        {path:'AddCategory',component:AddCategoryComponent},
        {path:'AddSubcategory',component:AddSubCategoryComponent},
        {path:'Block-UnblockBuyer',component:BlockUnblockBuyerComponent},
        {path:'Block-UnblockSeller',component:BlockUnblockSellerComponent},
        {path:'Daily-Reports',component:DailyReportsComponent},
        {path:'ViewCategory',component:ViewCategoryComponent},
        {path:'ViewSubCategory',component:ViewSubCategoryComponent}
      ]},
      {path:'Home',component:HomeComponent,children:[
      {path:'Login',component:LoginComponent},
      {path:'RegisterSeller',component:RegisterSellerComponent},
      {path:'RegisterBuyer',component:RegisterBuyerComponent}
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

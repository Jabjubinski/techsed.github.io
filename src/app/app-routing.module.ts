import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, //default path - defaults to home
  {path: 'products', component: ProductsComponent},//path to products page
  {path: 'products-details', component: ProductDetailsComponent},//path to product details-single product buy page
  {path: 'shopping-cart', component: ShoppingCartComponent},//path to shopping cart
  {path: '**', component: ErrorComponent},//path to error page if url bad
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

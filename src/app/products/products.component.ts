import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { info } from 'console';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  //filtering variables
  minPrice!: any;

  maxPrice!: any;

  keyWord!: any;

  public category: any = null;

  //apiData
  productsData!: any;

  constructor(public service: HttpService, public route: ActivatedRoute) {

    this.route.queryParams.subscribe((query: any) => {
      console.log(query);
      this.category = query.categoryId
    })

    this.route.queryParams.subscribe((param: any) => {
      if (param.categoryId == null) {
        this.service.getAllProducts().subscribe((data: any) => {
          this.productsData = data.products;
        });
      } else {
        this.service.getProductByCategory(param.categoryId).subscribe((data: any) => {
          this.productsData = data.products;
        });
      }
    });

    
    
  }

  productFilter() {
    this.service.getFilteredProducts(this.minPrice, this.maxPrice, this.keyWord).subscribe((info: any) => {
      this.productsData = info.products
      console.log(info);
    })
  }
  clearFilters() {
    this.service.getAllProducts().subscribe((info: any) => {
      this.productsData = info.products
      console.log(info);
      this.minPrice = '';
      this.maxPrice = '';
      this.keyWord = '';
    })
  }
  
}

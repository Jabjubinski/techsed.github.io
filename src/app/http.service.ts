import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=49');
  }

  getFilteredProducts(priceMin: number, priceMax: number, keyWord: string){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=49&keywords=${keyWord}&price_min=${priceMin}&price_max=${priceMax}`);
  }

  getSingleProduct(id: any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/id/${id}`);
  }

  getProductByCategory(id: number){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/category/${id}?page_index=1&page_size=49`);
  }
}
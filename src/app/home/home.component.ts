import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public category!: any;
  public productData!: any;

  constructor(public service: HttpService, public route: ActivatedRoute){
    this.service.getAllProducts().subscribe((info: any) => {
      this.productData = info.products
      console.log(info);
    })

    this.route.queryParams.subscribe((query: any) => {
      console.log(query);
      this.category = query.categoryId
    })
  }
  
}

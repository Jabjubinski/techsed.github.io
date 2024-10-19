import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public id!: any;
  public product!: any;

  @ViewChild(CartSidebarComponent) cartSidebar!: CartSidebarComponent;

  constructor(
    public route: ActivatedRoute,
    public service: HttpService,
    public cartService: CartService
  ) {
    this.route.queryParams.subscribe((param: any) => {
      this.id = param.id;
      this.service.getSingleProduct(this.id).subscribe((apiProduct: any) => {
        this.product = apiProduct;
      });
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.cartSidebar.toggleSidebar();  
  }
}

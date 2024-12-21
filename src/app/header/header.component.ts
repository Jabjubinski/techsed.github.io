import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class HeaderComponent {

  public id!: any;
  public productList!: any;
  public category!: any;
  public cartItems: any[] = [];

  constructor(public route: ActivatedRoute, public service: HttpService, public cartService: CartService) {
    this.cartItems = this.cartService.getCartItems(); // Load cart items
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId); // Remove the specific item
    this.cartItems = this.cartService.getCartItems(); // Update the cart items after removal
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price.current, 0);
  }
}



import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  public cartItems: any[] = [];

  constructor(public cartService: CartService) {
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

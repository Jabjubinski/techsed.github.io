import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent {
  public cartItems: any[] = [];
  public isVisible = false;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems(); // Load cart items
  }

  toggleSidebar() {
    this.isVisible = !this.isVisible;
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId); // Remove the specific item
    this.cartItems = this.cartService.getCartItems(); // Update the cart items after removal
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price.current, 0);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  removeFromCart(productId: string) {
    // Remove only the product with the matching productId
    this.cartItems = this.cartItems.filter(item => item._id !== productId);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}

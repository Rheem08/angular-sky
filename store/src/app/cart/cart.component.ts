import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { MessengerService } from '../messenger.service';
import { Product } from '../product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: Product;
  cartItems: CartItem[] = [];
  cartTotal = 0;
  constructor(private msg: MessengerService, private c: CartService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((prod: any) => {
      this.addProductToCart(prod);
    });
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.title,
        price: product.price,
        qty: 1,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
    this.c.cart = this.cartItems;
  }
}

import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory';
import { UserService } from '../user.service';
import { ProductService } from '../product.service';
import { NumberValueAccessor } from '@angular/forms';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../order';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  currentUser: UserService;
  cart: CartItem[] = [];
  total: number = 0;
  subtotal: number = 0;
  completed: boolean = false;
  constructor(
    private inventoryService: InventoryService,
    private prod: ProductService,
    private ord: OrderService,
    private router: Router,
    private c: CartService,
    private http: HttpClient
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  happyGuy:Order|any;
  //inventory: Inventory|any;
  ngOnInit(): void {
    this.currentUser = new UserService();
    //inserting cart objects here
    this.cart = this.c.cart;

    this.calculateTotal();
  }

  calculateTotal() {
    let subtotal = 0;
    let temp = 0;
    for (let i = 0; i < this.cart.length; i++) {
      temp = this.cart[i].price * this.cart[i].qty;
      subtotal += temp;
    }
    this.total = subtotal * 1.06;
    this.subtotal = subtotal;
  }

  submitOrder() {
    let subtotal = 0;
    let temp = 0;
    for (let i = 0; i < this.cart.length; i++) {
      temp = this.cart[i].price * this.cart[i].qty;
      subtotal += temp;
    }
    this.total = subtotal * 1.06;
    this.subtotal = subtotal;
    let newOrder = {
      subtotal: this.subtotal,
      total: this.total,
    };
    this.ord
      .postOrder(newOrder)
      .subscribe(() => console.log('completing order', newOrder));
    alert('Order has been completed');
    this.completed = true;
//     for (var x of happyGuy) {
//       console.log(x.subtotal)
//  }
    this.http.post<any>("http://localhost:2022/order", newOrder).subscribe(res=>{
    alert("Order Submitted Successfully")}
  )}

  redirect() {
    this.completed = false;
    this.router.navigate(['shop']);
  }
}

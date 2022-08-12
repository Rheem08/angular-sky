import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService){}

  ngOnInit(): void {
   // this.cartService.cartItems.subscribe(data=>{this.items = data;});
  }

}

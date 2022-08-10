import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

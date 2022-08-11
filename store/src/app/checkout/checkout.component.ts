import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import {Inventory} from '../inventory';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
currentUser:UserService;
  constructor(private inventoryService: InventoryService) { }
  //inventory: Inventory|any;
  ngOnInit(): void {
    this.currentUser=new UserService();
    //code in the books the user placed into the cart from the inventory
    /*this.inventoryService.GetBooks()
    .subscribe(data =>{
      this.inventory=data;
    })*/
  }

}

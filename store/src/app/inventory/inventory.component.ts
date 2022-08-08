import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }
   inventory: Inventory | any;

  ngOnInit(): void {
    this.inventoryService.GetBooks()
    .subscribe(data =>{
          this.inventory = data;
    });
  }

}

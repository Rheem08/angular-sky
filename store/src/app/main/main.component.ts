import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }
inventory:Inventory | any
  ngOnInit(): void {
    this.inventoryService.GetBooks()
    .subscribe(data =>{
          this.inventory = data;
    });
  }

}

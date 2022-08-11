import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  itemInCart:number;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.numOfItems.subscribe(d=>{this.itemInCart = d.length;});
  }

}

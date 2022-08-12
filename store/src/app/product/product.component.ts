import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product | any;
  constructor(private productService: ProductService, private cartService: CartService){}
  ngOnInit(): void {

  }
  addToCart(product: Product){
    this.cartService.addItem(product);
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList: Product[] = []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
    
  }

}

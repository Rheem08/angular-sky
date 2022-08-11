import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(17, 'Bakersfield', 'McFadden', 'Nonfiction', 10, 21),
    new Product(18, 'Friday', 'McFade', 'Fiction', 12, 11),
    new Product(19, 'Friday The 13th', 'McFade', 'Fiction', 12, 19),
    new Product(20, 'Halloween Town', 'Disney', 'Fantasy', 22, 9),
    new Product(21, 'Halloween Town 2', 'Disney', 'Fantasy', 22, 19),
    new Product(22, 'Halloween Town 3', 'Disney', 'Fantasy', 22, 1),
    new Product(23, 'Are we there yet?', 'Dl Hughey', 'Comedy', 13, 5)
  ]

  constructor() { }
  getProducts(){
    return this.products;
    }
}

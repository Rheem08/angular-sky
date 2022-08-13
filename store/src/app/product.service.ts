import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [
    new Product(17,'Bakersfield', 10),
    new Product(18,'Friday', 12),
    new Product(19,'Friday The 13th', 12),
    new Product(20,'Halloween Town', 22),
    new Product(21,'Halloween Town 2', 22),
    new Product(22,'Halloween Town 3', 22),
    new Product(23,'Are we there yet?', 22)
    ]
  constructor() { }
  getProducts(): Product[]{
    return this.products
    }}

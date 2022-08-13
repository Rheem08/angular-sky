import { Product } from "./product";

export class CartItem {
    productId: number;
    productName: string;
    qty: number;
    price: number;
  
    constructor(product: Product, qty = 1) {
      this.productId = product.id;
      this.productName = product.title;
      this.price = product.price;
      this.qty = qty;
    }
  }


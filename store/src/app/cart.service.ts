import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any = []
  numOfItems = new BehaviorSubject([]);
  constructor() { }
  addItem(product:Product){
    const exist= this.cartItems.find((item: { id: number; })=>{return item.id === product.id;});
    
    if(exist)
    exist.qty++;
    else
    this.numOfItems.next(this.cartItems);
    this.cartItems.push(product);
    console.log(this.cartItems);
}}

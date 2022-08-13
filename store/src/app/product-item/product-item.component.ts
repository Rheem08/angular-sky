import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product';
import { MessengerService } from '../messenger.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  AddtoCart(){
    this.msg.sendMsg(this.productItem)
    alert(this.productItem.title)
  }
}

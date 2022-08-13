import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product:any) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
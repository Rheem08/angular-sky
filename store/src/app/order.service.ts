import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseurl = 'http://localhost:2022/order';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseurl, order);
  }
}

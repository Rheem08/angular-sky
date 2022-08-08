import { Injectable } from '@angular/core';
import {Inventory} from './inventory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseurl = 'http://localhost:8080/inventory';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  GetBooks(): Observable<Inventory> {
    return this.http.get<Inventory>(this.baseurl)
    .pipe(
      retry(1)
      //catchError(this.errorHandl)
    )
  }
}

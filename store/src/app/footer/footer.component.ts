import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{ Inventory } from '../inventory';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  bookForm:FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.bookForm = this.fb.group({
    bookid: "",
    cost: " ",
    stock: " "
  })
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  onUpdate(id:any):Observable<Inventory>{
    return this.http.put<Inventory>('http://localhost:8080/inventory/update/'+ id, JSON.stringify, this.httpOptions)
  }
}
// UpdateBooky(id:any, data:any): Observable<Booky> {
//     return this.http.put<Booky>(this.baseurl + id, JSON.stringify(data), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.errorHandl)
//     )
  //}
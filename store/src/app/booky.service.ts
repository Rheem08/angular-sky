import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Booky } from './Booky';

@Injectable({
  providedIn: 'root'
})
export class BookyService {
  username: string;
  p_word: string;
  email: string;
  f_name: string;
  l_name: string;
  
  private auth: BehaviorSubject<boolean>;
    
  baseurl = 'http://localhost:2022/booky/';

  constructor(private http: HttpClient) {this.auth = new BehaviorSubject<boolean>(false) }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  makeTru(x:boolean){
    return x=false
  }
  setValue(newValue:any): void {
    this.auth.next(newValue)
  }
  getValue():Observable<boolean>{
    return this.auth.asObservable()
  }
  // GET
  GetBooky(id:any): Observable<Booky> {
    return this.http.get<Booky>(this.baseurl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // GET
  GetBookies(): Observable<Booky> {
    return this.http.get<Booky>(this.baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // PUT
  UpdateBooky(id:number, data:any) {
    return this.http.put<Booky>(this.baseurl+id, data)
    //return this.http.put<Booky>(this.baseurl+id, JSON.stringify(data))
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // DELETE
  DeleteBooky(id:any){
    return this.http.delete<Booky>(this.baseurl + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // Error handling
  
  errorHandl(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}

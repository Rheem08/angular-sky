import { HttpRequest, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booky } from '../Booky';
import {BookyService} from '../booky.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private bookyService: BookyService, private fb: FormBuilder, private http: HttpClient, private router: Router){}
  booky: Booky | any;

  ngOnInit(): void {
    this.initializeForm();
}
initializeForm(): void{
  this.loginForm = this.fb.group({
    username: [''],
    p_word: ['']
  })
  
}
onSubmit(){
  this.http.get<any>("http://localhost:8080/booky").subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.username === this.loginForm.value.username && a.p_word === this.loginForm.value.p_word;
    });
    console.log(user);
    if(user){
    alert("Login successful");
    this.router.navigate(['profile']); //profile hasn't been created yet
  }else {
    alert("User not found!");
  }
},err=>{
  alert("something went wrong...");
})
}
}
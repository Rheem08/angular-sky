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
  public static valid:boolean=false
  public static invalid:boolean=true;
  

  constructor(private bookyService: BookyService, private fb: FormBuilder, 
    private http: HttpClient, private router: Router){

    }
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
  this.http.get<any>("http://localhost:8080/booky").subscribe(res=>{ //connects the RestAPI, performs get method
    const user = res.find((a:any)=>{ //inside of response we are assigned the values found at the resource in the response to the user
      return a.username === this.loginForm.value.username && a.p_word === this.loginForm.value.p_word;
    });
    this.bookyService.setValue(false)

    if(user){
    alert("Login successful");
    this.router.navigate(['inventory']); 
  }else {
    alert("User not found!");
  }
},err=>{
  alert("something went wrong...");
})
}

}